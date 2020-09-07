// FORMULA for Fahrenheit to Celsius
    // C = (F - 32) / 2
    // F = (C * 1.8) + 32

export const convertToF = (currentWeatherData, weatherForecast, isF) => {
    currentWeatherData.main.temp_max = (currentWeatherData.main.temp_max * 1.8) + 32;
    currentWeatherData.main.temp_min = (currentWeatherData.main.temp_min * 1.8) + 32;
    weatherForecast.forEach(obj => {
        obj.temperature.max = (obj.temperature.max * 1.8) + 32;
        obj.temperature.min = (obj.temperature.min * 1.8) + 32;
    });
    isF.isFahrenheit = true;
}

export const convertToC = (currentWeatherData, weatherForecast, isF) => {
    currentWeatherData.main.temp_max = (currentWeatherData.main.temp_max - 32) / 1.8;
    currentWeatherData.main.temp_min = (currentWeatherData.main.temp_min - 32) / 1.8;
    weatherForecast.forEach(obj => {
        obj.temperature.max = (obj.temperature.max - 32) / 1.8;
        obj.temperature.min = (obj.temperature.min - 32) / 1.8;
    });
    isF.isFahrenheit = false;
}