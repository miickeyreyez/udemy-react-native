import React, { useState, useEffect } from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Form from './components/Form';
import Weather from './components/Weather';

const App: () => React$Node = () => {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [toBeFetch, setToBeFetch] = useState(false);
  const [data, setData] = useState({ name: '', main: {} });
  const [bgColor, setBgColor] = useState('rgb(71, 149, 212)');

  const { city, country } = search;

  const API_KEY = '';

  const showErrorAlert = () => Alert.alert('Error', 'No existen resultados', [{ text: 'OK' }]);
  const hideKeyboard = () => Keyboard.dismiss();

  useEffect(() => {
    const consultarClima = async () => {
      if (toBeFetch) {      
        try {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
          const result = await fetch(url);
          const response = await result.json();

          const kelvin = 273.15;
          const { main } = response;
          const current = main.temp - kelvin;
          
          const weather = {
            cold: 'rgb(105, 198, 149)',
            tempered: 'rgb(71, 149, 212)',
            warm: 'rgb(178, 28, 61)',
          };

          const { cold, tempered, warm } = weather;

          let currentWeather = tempered;

          if (current < 10) {
            currentWeather = cold;
          } else if (current > 25) {
            currentWeather = warm;
          }

          setBgColor(currentWeather);
          setData(response);
          setToBeFetch(false);
        } catch(e) {
          showErrorAlert();
        }
      }
    }
    consultarClima();
  }, [toBeFetch]);

  const appBg = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={[styles.app, appBg]}>
          <View style={styles.content}>
            <Weather
              data={data}
            />
            <Form
              search={search}
              setSearch={setSearch}
              setToBeFetch={setToBeFetch}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
