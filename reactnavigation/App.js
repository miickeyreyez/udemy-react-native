/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
 import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './views/index';
import Us from './views/us';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Index'
          // screenOptions: {}
        >
          <Stack.Screen
            name='Index'
            component={Index}
            options={{
              title: 'Componente principal',
              headerStyle: {
                backgroundColor: '#F4511E',
              },
              headerTintColor: '#FFF',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name='Us'
            component={Us}
            options={
              ({ route }) => ({
                title: route.params.id
              })
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
