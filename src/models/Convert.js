// FORMULA for Fahrenheit to Celsius
    // C = (F - 32) / 2
    // F = (C * 1.8) + 32

export const convertToF = (currentWeatherData, weatherForecast) => {
    currentWeatherData.main.temp_max = (currentWeatherData.main.temp_max * 1.8) + 32;
    currentWeatherData.main.temp_min = (currentWeatherData.main.temp_min * 1.8) + 32;
    weatherForecast.forEach(obj => {
        obj.temperature.max = (obj.temperature.max * 1.8) + 32;
        obj.temperature.min = (obj.temperature.min * 1.8) + 32;
    });
}

export const convertToC = (currentWeatherData, weatherForecast) => {
    currentWeatherData.main.temp_max = (currentWeatherData.main.temp_max - 32) / 2;
    currentWeatherData.main.temp_min = (currentWeatherData.main.temp_min - 32) / 2;
    weatherForecast.forEach(obj => {
        obj.temperature.max = (obj.temperature.max - 32) / 2;
        obj.temperature.min = (obj.temperature.min - 32) / 2;
    });
}