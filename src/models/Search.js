import axios from 'axios';
import * as apiKeys from '../config';

//https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${API_KEY};

export default class Search {
    constructor(city){
        this.city = city;
    }

    async getWeather(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${apiKeys.currentWeatherKey}`);
            this.currentWeatherData = response.data;
        } catch(error){
            console.log(`We ran into an error: ${error}`);
        }
    }

    async getForecast(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&units=imperial&cnt=6&appid=${apiKeys.forecastWeatherKey}`);
            this.weatherForecast = response.data.list.map(el => {return {temperature: el.temp, main: el.weather[0]}}).slice(1);
        } catch (error){
            console.log(`fetching forecast has failed: ${error}`)
        }
    }
}