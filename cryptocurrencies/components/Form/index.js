import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import Axios from 'axios';

const Form = ({ currency, criptoCurrency, setCurrency, setCriptoCurrency, setToBeFetched }) => {
  const [currencies, setCurrencies] = useState([{ CoinInfo: {} }]);

  useEffect(() => {
    const fetchApi = async ()  => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`;
      const result = await Axios.get(url);
      setCurrencies(result.data.Data);
    }
    
    if (currency) {
      fetchApi();
    } else {
      setCurrencies([{ CoinInfo: {} }]);
    }
  }, [currency]);

  const isEmptyString = (toValidate) => toValidate.trim() === '' || !toValidate;

  const showAlert = () => (
    Alert.alert(
      'Error',
      'Ambos campos son obligatorios',
      [
        { text: 'Aceptar' },
      ]
    )
  );

  const quotation = () => {
    if (isEmptyString(currency) || isEmptyString(criptoCurrency)) {
      showAlert();
    }
    setToBeFetched(true);
  };

  return (
    <View>
      <Text style={styles.label}>
        Moneda
      </Text>

      <Picker
        itemStyle={{ height: 120 }}
        selectedValue={currency}
        onValueChange={ (selectedCurrency) => setCurrency(selectedCurrency) }
      >
        <Picker.Item label='Seleccione un valor' value='' />
        <Picker.Item label='Dólar' value='USD' />
        <Picker.Item label='Peso' value='MXN' />
        <Picker.Item label='Euro' value='EUR' />
        <Picker.Item label='Libra' value='GBP' />
      </Picker>

      <Text style={styles.label}>
        Criptomoneda
      </Text>

      <Picker
        itemStyle={{ height: 120 }}
        selectedValue={criptoCurrency}
        onValueChange={ (selectedCriptoCurrency) => setCriptoCurrency(selectedCriptoCurrency) }
      >
        <Picker.Item label='Seleccione un valor' value='' />
        
        {
          currencies.map((crypto) => (
            <Picker.Item
              key= {crypto.CoinInfo.Id}
              label={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name} />
          ))
        }
      </Picker>

      <TouchableHighlight
        onPress={() => quotation()}
        style={styles.quoteButton}>
        <Text style={styles.quoteText}>
          Cotizar
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  quoteButton: {
    backgroundColor: '#5E49E2',
    marginTop: 20,
    padding: 10,
  },
  quoteText: {
    color: '#FFF',
    fontSize: 18,fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;
