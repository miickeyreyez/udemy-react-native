import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Quotation from './components/Quotation';

const App: () => React$Node = () => {
  const [currency, setCurrency] = useState('USD');
  const [criptoCurrency, setCriptoCurrency] = useState('BTC');
  const [toBeFetched, setToBeFetched] = useState(false);
  const [quotation, setQuotation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (toBeFetched) {
      const fetchApi = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`
        const result = await Axios.get(url);

        setLoading(true);

        setTimeout(() => {
          result.data.DISPLAY && setQuotation(result.data.DISPLAY[criptoCurrency][currency]);
          setToBeFetched(false);
          setLoading(false);
        }, 2000);
      }
      fetchApi();
    }
  }, [toBeFetched]);

  const showQuotation = (currency && criptoCurrency) ? <Quotation quotation={quotation} />  : null;
  const quotationIndicator = loading ? <ActivityIndicator size='large' color='#5E49E2'  /> : showQuotation

  return (
    <>
      <ScrollView>
        <Header />

        <Image
          style={styles.image}
          source={ require('./assets/img/cryptomonedas.png') }
        />

        <View style={styles.content}>
          <Form
            currency={currency}
            criptoCurrency={criptoCurrency}
            setCurrency= {setCurrency}
            setCriptoCurrency={setCriptoCurrency}
            setToBeFetched={setToBeFetched}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          { quotationIndicator }
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: '2.5%',
  },
  image: {
    height: 150,
    marginHorizontal: '2.5%',
    width: '100%',
  },
});

export default App;
