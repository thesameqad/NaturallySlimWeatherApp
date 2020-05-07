import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { convertDegreesToString } from '../shared/weatherConverter';
import { getFormattedDate, getDayName } from '../shared/datesHelper';
import { getFileNameForIcon } from '../shared/iconHelper';

export default function ForecastWeatherItem(props) 
{
    console.log("item", props);
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.iconBlock}>
                    <Image style={styles.icon}
                        source={getFileNameForIcon(props.precipitation.icon)}/>
                </View>
                <View style={styles.centralBlock}>                
                    <Text style={styles.dayText}>{getDayName(props.date)}</Text>
                    <Text style={styles.precipitationText}>{props.precipitation.description}</Text>
                </View>
                <View style={styles.rightBlock}> 
                    <View>
                        <Text style={styles.curTempText}>{convertDegreesToString(props.curTemp)}</Text>
                    </View>               
                    <View>
                        <Text style={styles.minTempText}>{convertDegreesToString(props.minTemp)}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        height:'20%'
    },
    innerContainer: {   
        flex:12,
        height:'20%',
        flexDirection:'row',
        paddingTop:20
    },
    iconBlock: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width:50,
        resizeMode:'contain',
        height:'100%'      
    },
    dayText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    precipitationText: {
        fontSize: 15
    },
    curTempText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
    },
    minTempText: {
        fontSize: 15,
        textAlign: 'center'
    },
    centralBlock: {
        flex:8,
        justifyContent: 'center'
    },
    rightBlock: {
        flex:2,
        justifyContent: 'center'
    }
});