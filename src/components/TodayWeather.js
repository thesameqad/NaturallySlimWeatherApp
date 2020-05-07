import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './StyledText';
import { getFormattedDate } from '../shared/datesHelper';
import { getFileNameForIcon } from '../shared/iconHelper';
import { convertDegreesToString } from '../shared/weatherConverter';
import { Colors } from '../styles/colors';

const TodayWeather = ({weather}) =>
{
    const today = getFormattedDate(new Date(), "Today");
    
    return (
        <View style={styles.container}>
            <View style={styles.leftBlock}>
                <View style={styles.dateBlock}>
                    <Text style={styles.dateText}>{today}</Text>
                </View>
                <View style={styles.curTempBlock}>
                    <Text style={styles.curTempText}>{convertDegreesToString(weather.curTemp)}</Text>
                </View>
                <View style={styles.minTempBlock}>
                    <Text style={styles.minTempText}>{convertDegreesToString(weather.minTemp)}</Text>
                </View>                
            </View>
            <View style={styles.rightBlock}>
                <View style={styles.precImageBlock}>
                    <Image 
                        style={{alignContent: 'center', width:'100%'}}
                        source={getFileNameForIcon(weather.precipitation.icon)}/>                        
                </View> 
                <View style={styles.precDescrBlock}>
                    <Text style={styles.precDescrText}>{weather.precipitation.description}</Text>
                </View>
                
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: Colors.primaryColor
    },
    dateBlock: {
        marginBottom: 20        
    },
    dateText: {
        fontSize: 20,
        textAlign: 'left'
    },
    curTempBlock: {
        marginBottom: 10        
    },
    curTempText: {
        fontSize: 90,
        textAlign: 'left'
    },
    minTempBlock: {
        marginBottom: 20,
        marginLeft: 10      
    },
    minTempText: {
        fontSize: 45,
        textAlign: 'left'
    },
    precImageBlock: {
        width: '100%',
        height:'80%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    precDescrBlock: {
        marginTop:5        
    },
    precDescrText: {
        textAlign: 'center',
        fontSize: 20
    },
    leftBlock: {
        flex: 1
    },
    rightBlock: {
        flex:1
    }
});



export default TodayWeather;