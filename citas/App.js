/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <Text style={styles.header}>Hello world!</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headers: {
    textAlign: 'center',
    marginTop: 100,
  },
});

export default App;
