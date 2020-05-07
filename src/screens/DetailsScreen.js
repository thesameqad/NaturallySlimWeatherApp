import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import { getFormattedDate } from '../shared/datesHelper';
import { getFileNameForIcon } from '../shared/iconHelper';
import { convertDegreesToString } from '../shared/weatherConverter';
import { Colors } from '../styles/colors';

const DetailsScreen = ({weather, onBack}) =>
{
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Button onPress={onBack} title="x"/>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.leftBlock}>
                    <View style={styles.dateBlock}>
                        <Text style={styles.dateText}>{getFormattedDate(weather.date)}</Text>
                    </View>
                    <View style={styles.curTempBlock}>
                        <Text style={styles.curTempText}>{convertDegreesToString(weather.curTemp)}</Text>
                    </View>
                    <View style={styles.minTempBlock}>
                        <Text style={styles.minTempText}>{convertDegreesToString(weather.minTemp)}</Text>
                    </View>  
                    <View>
                        <Text>Humidity: {weather.humidity}</Text>
                        <Text>Pressure: {weather.pressure}</Text>
                        <Text>Wind: {weather.wind}</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:12
    },
    headerContainer: {
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'flex-start'
    },
    mainContainer: {
        flex: 11,
        padding: 50,
        color: '#fff',
        flexDirection: 'row',
        backgroundColor: Colors.secondaryColor
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
        marginTop: 50,
        alignContent: 'center',
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



export default DetailsScreen;