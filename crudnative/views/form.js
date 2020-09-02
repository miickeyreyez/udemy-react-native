import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Button, Headline, TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import GlobalStyles from '../styles/global';
import Axios from 'axios';

const Form = ({ navigation, route }) => {
  const { client: tempClient, setFetchApi } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(tempClient)
    if (tempClient) {
      const { name: n, company: c, email: e, phone: p } = tempClient;
      setName(n);
      setCompany(c);
      setEmail(e);
      setPhone(p);
    }
  }, []);

  const storeClient = async () => {
    const data = [name, phone, email, company];

    const client = {
      name,
      phone,
      email,
      company,
    };

    if (data.some((x) => x === '')) {
      setError(true);
      return;
    }

    if (tempClient) {
      const { id } = tempClient;
      client.id = id;
      await Axios.put(`http://localhost:3000/clients/${id}`, client);
    } else {
      try {
        if (Platform.OS == 'ios') {
          await Axios.post('http://localhost:3000/clients', client);
        } else {
          await Axios.post('http://10.0.2.2:3000/clients', client);
        }
      } catch(e) {
        console.log(e);
      }
    }

    navigation.navigate('Index');

    setName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setFetchApi(true);
  };

  return (
    <View style={GlobalStyles.container}>
      <Headline style={GlobalStyles.title}>
        Añadir nuevo cliente
      </Headline>

      <TextInput
        label='Nombre'
        onChangeText={ (text) => setName(text) }
        placeholder='Nombre'
        style={styles.input}
        value={name}
      />

      <TextInput
        label='Teléfono'
        onChangeText={ (text) => setPhone(text) }
        placeholder='Teléfono'
        style={styles.input}
        value={phone}
      />

      <TextInput
        label='Correo'
        onChangeText={ (text) => setEmail(text) }
        placeholder='Correo'
        style={styles.input}
        value={email}
      />
 
      <TextInput
        label='Empresa'
        onChangeText={ (text) => setCompany(text) }
        placeholder='Empresa'
        style={styles.input}
        value={company}
      />

      <Button
        icon='pencil-circle'
        mode='contained'
        onPress={() => storeClient()}>
        Guardar cambios
      </Button>

      <Portal>
        <Dialog
          onDismiss={ () => setError(false)}
          visible={error}
        >
          <Dialog.Title>
            ERROR
          </Dialog.Title>

          <Dialog.Content>
            <Paragraph>
              Todos los campos son obligatorios
            </Paragraph>
          </Dialog.Content>

          <Dialog.Actions>
            <Button
              onPress={ () => setError(false)}
            >
              Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
});

export default Form;
