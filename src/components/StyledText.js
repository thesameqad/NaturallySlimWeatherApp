import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

export default function StyledText(props) 
{
    return (
        <Text {...props} style={[styles.text, props.style]}>
            {props.children}
        </Text> 
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
});