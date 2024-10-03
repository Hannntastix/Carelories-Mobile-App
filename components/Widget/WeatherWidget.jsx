import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherWidget = () => {
  return (
    <View style={{
      padding: 20,
      backgroundColor: '#2196F3',
      borderRadius: 15,
      marginBottom: 20,
      alignItems: 'center',
      margin:10,
    }}>
      <Text style={{
        color: '#fff',
        fontSize: 24,
        fontFamily: 'outfit-medium',
      }}>Current Weather</Text>
      <Image
        source={{ uri: 'https://www.weatherbit.io/static/img/icons/c01d.png' }} // Replace with a dynamic image based on weather
        style={{ width: 50, height: 50, marginVertical: 10 }}
      />
      <Text style={{
        color: '#fff',
        fontSize: 18,
        fontFamily: 'outfit',
      }}>25°C</Text>
      <Text style={{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'outfit',
      }}>Sunny</Text>
    </View>
  );
};

export default WeatherWidget;
