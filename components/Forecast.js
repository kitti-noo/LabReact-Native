import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


export default function Forecast(props) {
    
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <Image style={{width:100,height:100}} source={{uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png'}}/>
            <View style={{marginTop: 20}}>
            
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        marginTop: 20,
        fontSize: 30,
        color: 'white',
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    },
})
