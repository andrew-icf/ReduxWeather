import axios from 'axios';

const API_KEY = 'f98fd6d223721339818d01667b4d21a5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'; // we do this to keep our action types consistent between our action creators and our reducers, we will be creating a reducer that handles this type

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`; // & and adds on the additional query string
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
