import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Quotation = ({ quotation }) => {
  if (Object.keys(quotation).length === 0) {
    return null;
  }

  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>
          { quotation.PRICE }
        </Text>
      </Text>

      <Text style={styles.text}>
        Precio más alto del día: {' '}
        <Text style={styles.span}>
          { quotation.HIGHDAY }
        </Text>
      </Text>

      <Text style={styles.text}>
        Precio más bajo del día: {' '}
        <Text style={styles.span}>
          { quotation.LOWDAY }
        </Text>
      </Text>

      <Text style={styles.text}>
        Variación últimas 24 horas: {' '}
        <Text style={styles.span}>
          { quotation.CHANGEPCT24HOUR } %
        </Text>
      </Text>

      <Text style={styles.text}>
        Última acualización: {' '}
        <Text style={styles.span}>
          { quotation.LASTUPDATE }
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 38,
  },
  result: {
    backgroundColor: '#5E49E2',
    padding: 20,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Quotation;
