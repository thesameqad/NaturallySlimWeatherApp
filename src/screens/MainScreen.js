import React, { useState, useEffect } from 'react';
import axios from "axios";
import {ActivityIndicator, View, Text} from 'react-native';
import TodayWeather from '../components/TodayWeather';
import ForecastWeatherList from '../components/ForecastWeatherList';
import openWeatherService from '../services/openWeatherService';
import { Colors } from '../styles/colors';
import DetailsScreen from './DetailsScreen';

const MainScreen = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [todayWeather, setTodayWeather] = useState(null);    
    const [forecastWeather, setForecastWeather] = useState([]);    
    const [selectedDateItem, setSelectedDateItem] = useState(null);
    useEffect(() => {
        const promises = [];
        promises.push(openWeatherService.getTodayWeather());
        promises.push(openWeatherService.get5DaysWeather());
        axios.all(promises).then(axios.spread((...args) => {
            const todayResponse = args[0].data;
            console.log("todayResponse", todayResponse);
            const fiveDaysResponse = args[1].data;
            console.log("fiveDaysResponse", fiveDaysResponse);
            setTodayWeather({
                curTemp: todayResponse.main.temp,
                minTemp: todayResponse.main.temp_min,
                humidity: todayResponse.main.humidity,
                wind:todayResponse.wind.speed,
                pressure:todayResponse.main.pressure,
                precipitation: {
                    description: todayResponse.weather[0].main,
                    icon: todayResponse.weather[0].icon
                }
            });

            const tempArray = [];
            //Because APIs doesn't return daily weather anymore, instead, returns 3-hours periods, need to take every 8th period skipping Today
            for(let i=8;i<fiveDaysResponse.list.length;i+=8)
            {
                tempArray.push(fiveDaysResponse.list[i]);
            }

            const forecastList = tempArray.map( (item, ind) => {
               return {
                   curTemp: item.main.temp,
                   minTemp: item.main.temp_min,
                   precipitation: {
                    description: item.weather[0].main,
                    icon: item.weather[0].icon
                   },
                   humidity: item.main.humidity,
                   wind:item.wind.speed,
                   pressure:item.main.pressure,
                   date: new Date(item.dt_txt),
                   id:ind
               } 
            });

            setForecastWeather(forecastList);

            setIsLoaded(true);

        }));
    }, []);

    const onShowDetails = (item) => {        
        console.log("clicked",item);
        setSelectedDateItem(item);
    };

    const onBackFromDetails = () => {        
        setSelectedDateItem(null);
    };

    return (<View>
        {isLoaded ? 
            <>
                {selectedDateItem != null ? 
                    <View style={{height: '100%'}}>
                        <DetailsScreen weather={selectedDateItem} onBack={onBackFromDetails} />
                    </View> 
                    :
                    <View style={{height: '100%'}}>            
                        <TodayWeather weather={todayWeather} />
                        <ForecastWeatherList forecast={forecastWeather} onShowDetails={onShowDetails} />
                    </View>
                }   
            </>
            : 
            <View style={{justifyContent:'center', height:'100%'}}>
                <ActivityIndicator size="large" color={Colors.primaryColor} />
            </View>
        }
        

    </View>);

}

export default MainScreen;