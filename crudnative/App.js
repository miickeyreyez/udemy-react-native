import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider } from 'react-native-paper';
import Index from './views/index';
import Form from './views/form';
import Details from './views/details';
import Toolbar from './components/ui/toolbar';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    primary: '#1774F2',
    accent: '#0655BF',
  },
}

const App: () => React$Node = () => {
  return (
    <>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Index'
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: '#FFF',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              component={Index}
              name='Index'
              options={
                ({ navigation, route }) => ({
                  headerLeft: (props) => <Toolbar {...props} navigation={navigation} route={route} />
                })
              }
            />

            <Stack.Screen
              component={Form}
              name='Form'
              options={{
                title: 'Nuevo Cliente',
              }}
            />

            <Stack.Screen
              component={Details}
              name='Details'
              options={{
                title: 'Detalles Cliente',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
