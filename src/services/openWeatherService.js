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
            return request;
          })
          
          this.server.interceptors.response.use(response => {
            return response;
          })
    }

    getTodayWeather()
    {
        return this.server.get('/weather');
    }

    get5DaysWeather()
    {
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