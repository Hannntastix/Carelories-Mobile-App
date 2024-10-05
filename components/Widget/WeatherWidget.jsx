import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherWidget = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '4ae3e0a4d982773f6b53e963ca6ba328';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
        } else {
          setError(data.message); 
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  const { main, weather, wind } = weatherData;

  if (!weather || weather.length === 0) {
    return <Text>No weather data available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Weather in {city}</Text>
      <Image
        source={{ uri: `http://openweathermap.org/img/w/${weather[0].icon}.png` }} 
        style={styles.icon}
      />
      <Text style={styles.temperature}>{main.temp}°C</Text>
      <Text style={styles.description}>{weather[0].description}</Text>
      <Text style={styles.info}>Humidity: {main.humidity}%</Text>
      <Text style={styles.info}>Wind Speed: {wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2196F3',
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'outfit-medium',
  },
  icon: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  temperature: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'outfit',
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'outfit',
  },
  info: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'outfit',
  },
});

export default WeatherWidget;
