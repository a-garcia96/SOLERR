import axios from 'axios';
import {api_key} from '../config';

//https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=${API_KEY};

export default class Search {
    constructor(city){
        this.city = city;
    }

    async searchCity(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${api_key}`);
            this.data = response.data
        } catch(error){
            console.log(`We ran into an error: ${error}`);
        }
    }
}