import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Form = ({ search, setSearch, setToBeFetch }) => {
  const { city, country } = search;

  const [ animatedButton ] = useState(new Animated.Value(1));

  const fadeInAnimation = () => {
    Animated.spring(animatedButton, {
      toValue: .9,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutAnimation = () => {
    Animated.spring(animatedButton, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  const animationStyle = {
    transform: [{ scale: animatedButton }],
  };

  const showErrorAlert = () => Alert.alert('Error', 'Valores inválidos', [{ text: 'Entendido' }]);

  const getWeather = () => {
    if (country.trim() === '' || city.trim() === '') {
      showErrorAlert();
      return;
    }
    setToBeFetch(true);
  }

  return (
    <>
      <View style={styles.form}>
        <View>
          <TextInput
            value={city}
            onChangeText={ (newCity) => setSearch({ ...search, city: newCity })}
            style={styles.input}
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>

        <View>
          <Picker
            selectedValue={country}
            onValueChange={ (newCountry) => setSearch({ ...search, country: newCountry })}
            itemStyle={{ backgroundColor: '#FFF', height: 120 }}
          >
            <Picker.Item label='Seleccione un país' value='' />
            <Picker.Item label='Estados Unidos' value='US' />
            <Picker.Item label='México' value='MX' />
            <Picker.Item label='Argentina' value='AR' />
            <Picker.Item label='Colombia' value='CO' />
            <Picker.Item label='España' value='ES' />
          </Picker>
        </View>
      </View>

      <TouchableWithoutFeedback
        onPressIn={() => fadeInAnimation()}
        onPressOut={() => fadeOutAnimation()}
        onPress={() => getWeather()}
      >
        <Animated.View style={[styles.searchButton, animationStyle]}>
            <Text style={styles.searchText}>
              Buscar clima
            </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 20,
    height: 50,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#000',
    justifyContent: 'center',
    marginTop: 50,
    padding: 10,
  },
  searchText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;
