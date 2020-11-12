import axios from 'axios';

export default class Search {
    constructor(city){
        this.city = city;
        this.isFahrenheit = true;
    }

    async getWeather(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${process.env.KEY_CURRENTWEATHER}`);
            this.currentWeatherData = response.data;
        } catch(error){
            console.log(`We ran into an error: ${error}`);
        }
    }

    async getForecast(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&units=imperial&cnt=6&appid=${process.env.KEY_WEATHERFORECAST}`);
            this.weatherForecast = response.data.list.map(el => {return {temperature: el.temp, main: el.weather[0]}}).slice(1);
        } catch (error){
            console.log(`fetching forecast has failed: ${error}`);
        }
    }
}