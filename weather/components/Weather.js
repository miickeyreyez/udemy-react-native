import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Weather = ({ data }) => {
  const { name, main, weather } = data;
  const { temp, temp_min, temp_max } = main;
  const kelvin = 273.15;

  const kelvinToC = (tempToConvert = 0) => parseInt(tempToConvert - kelvin);

  if (!name) {
    return null;
  }

  return (
    <>
      <View style={styles.weather}>
        <Text style={[styles.text, styles.current]}>
          { kelvinToC(temp) }

          <Text style={styles.temperature}>&#x2103;</Text>

          <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: `http://openweathermap.org/img/w/${weather[0].icon}.png` }}
        />
        </Text>

        <View style={styles.weathers}>
          <Text style={styles.text}>
            Min {' '}
            <Text style={styles.temperature}>
            { kelvinToC(temp_min) } &#x2103;
            </Text>
          </Text>

          <Text style={styles.text}>
            Max {' '}
            <Text style={styles.temperature}>
            { kelvinToC(temp_max) } &#x2103;
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  current: {
    fontSize: 70,
    fontWeight: 'bold',
    marginRight: 0,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  weather: {
    marginBottom: 20,
  },
  weathers: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Weather;
