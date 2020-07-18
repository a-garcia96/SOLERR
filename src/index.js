import CurrentWeather from './models/Search';
import Search from './models/Search';

const state = {};

state.searchQuery = new Search('san diego');

state.searchQuery.searchCity();

console.log(state.searchQuery);