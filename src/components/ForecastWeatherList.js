import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';
import { Colors } from '../styles/colors';

const ForecastWeatherList = ({forecast, onShowDetails}) =>
{
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.list}
                    data={forecast}
                    renderItem={({ item }) => 
                        (<TouchableHighlight onPress={() => onShowDetails(item)}>
                            <ForecastWeatherItem {...item} />
                        </TouchableHighlight>)}
                    keyExtractor={(item) => {console.log("key",item); return item.id.toString();}}
                />     
            </View>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: Colors.secondaryColor,
        height:'100%'  
    },
    list: {

    }
});



export default ForecastWeatherList;