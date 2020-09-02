import React from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Headline, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import Axios from 'axios';

const Details = ({ navigation, route }) => {
  const { item, setFetchApi } = route.params;
  const { company, email, id, name, phone } = item;

  const deleteContact = async () => {
    try {
      await Axios.delete(`http://localhost:3000/clients/${id}`);
    } catch (e) {
      console.log(e);
    }

    navigation.navigate('Index');

    setFetchApi(true);
  }

  const showConfirmation = () => {
    Alert.alert(
      'Desea eliminar al cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        { text: 'Sí, eliminar', onPress: () => deleteContact() },
        { text: 'Cancelar', style: 'cancel' },
      ],
    );
  }

  return (
    <View style={globalStyles.container}>
      <Headline style={globalStyles.title}>
        { name }
      </Headline>

      <Text style={styles.text}>
        Empresa:
        <Subheading>
          { company }
        </Subheading>
      </Text>

      <Text style={styles.text}>
        Correo:
        <Subheading>
          { email }
        </Subheading>
      </Text>

      <Text style={styles.text}>
        Teléfono:
        <Subheading>
          { phone }
        </Subheading>
      </Text>

      <Button
        icon='cancel'
        mode='contained'
        style={styles.button}
        onPress={() => showConfirmation() }>
        Eliminar cliente
      </Button>

      <FAB
        icon='pencil'
        style={globalStyles.fab}
        onPress={() => navigation.navigate('Form', { client: item, setFetchApi }) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    marginTop: 100,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Details;
