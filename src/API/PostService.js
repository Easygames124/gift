import axios from 'axios';

export default class PostService {
    static async getWeather(lat, lon) {
        const weatherAPIKey = 'd0bf22baf76f56cfcc17acee03ecaf81';
        return await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: lat,
                lon: lon,
                appid: weatherAPIKey,
                units: 'metric',
                lang: 'ru'
            }
        });
    };
    static async getWeatherForecast(lat, lon) {
        const weatherAPIKey = 'd0bf22baf76f56cfcc17acee03ecaf81';
        return await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                lat: lat,
                lon: lon,
                appid: weatherAPIKey,
                units: 'metric',
                lang: 'ru'
            }
        });
    };
};