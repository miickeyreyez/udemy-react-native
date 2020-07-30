import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

const Header = () => (
    <View>
      <Text style={styles.header}> Criptocurrencies </Text>
    </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5E49E2',
    color: '#FFF',
    fontFamily: 'Lato-Black',
    fontSize: 20,
    marginBottom: 30,
    paddingBottom: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Header;
