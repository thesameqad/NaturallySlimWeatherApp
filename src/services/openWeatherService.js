import axios from "axios";
import { ApiConsts } from '../shared/consts';

class openWeatherServiceClass {
    constructor()
    {
        this.server = axios.create({   
            baseURL: ApiConsts.OpenWeatherApi,
            params: {
                appid: ApiConsts.ApiKey,
                units: ApiConsts.Units,
                q: `${ApiConsts.CurrentAddress.City}`
            }
          });   
          
          this.server.interceptors.request.use(config => {
            config.params = {
                ...config.params,
                appid: ApiConsts.ApiKey,
                units: ApiConsts.Units,
                q: `${ApiConsts.CurrentAddress.City}`
            };
            return config;
          });

          this.server.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request;
          })
          
          this.server.interceptors.response.use(response => {
            console.log('Response:', response)
            return response;
          })
    }

    getTodayWeather()
    {
        console.log("getTodayWeather");
        return this.server.get('/weather');
        //return axios.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=b8e7e331d05b93469603bfb9050374f0');
    }

    get5DaysWeather()
    {
        console.log("get5DaysWeather");
        //Because APIs doesn't return daily weather anymore, instead, returns 3-hours periods, need to retrieve data for 5*8 days
        return this.server.get('/forecast', {
            params: {
                cnt: 5 * 8
            }
        });
        //return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=dallas&units=imperial&cnt=5&appid=b8e7e331d05b93469603bfb9050374f0');
    }


}

export default new openWeatherServiceClass();