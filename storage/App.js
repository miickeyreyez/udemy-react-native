import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Button,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

const App: () => React$Node = () => {
  const [name, setName] = useState('');
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const setData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      setCurrentName(name);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const n = await AsyncStorage.getItem('name');
      setCurrentName(n);
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('name');
      setCurrentName('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {
          !!currentName && (
            <Text>
              Hola { currentName }
            </Text>
          )
        }

        <TextInput
          onChangeText={ (text) => setName(text) }
          placeholder='Escribe tu nombre'
          style={styles.input}
        />

        <Button
          color = '#333'
          onPress={ () => setData() }
          title = 'Guardar'
        />

        {
          !!currentName && (
            <TouchableHighlight
              onPress={ () => removeData() }
              style={styles.deleteButton}>

              <Text style={styles.deleteText}>
                Eliminar nombre &times;
              </Text>

            </TouchableHighlight>
          )
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    height: 40,
    width: 300,
  },
});

export default App;
