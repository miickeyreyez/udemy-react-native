import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';

const Index = ({ navigation, props }) => {
  const [clients, setClients] = useState([]);
  const [fetchApi, setFetchApi] = useState(true);

  useEffect(() => {
    const getClients = async () => {
      try {
        const result = await Axios.get('http://localhost:3000/clients');
        console.log(result);
        setClients(result.data);
        setFetchApi(false);
      } catch (e) {
        console.log(e);
      }
    };
    
    if (fetchApi) {
      getClients();
    }
  }, [fetchApi]);
 
  return (
    <View style={globalStyles.container}>
      <Button
        icon='plus-circle'
        onPress={() => navigation.navigate('Form', { setFetchApi }) }
      >
        Nuevo Cliente
      </Button>

      <Headline
        style={globalStyles.title}
      >
         { clients.length > 0 ? 'Clientes' : 'Aún no hay clientes' }
      </Headline>

      <FlatList
        data={clients}
        keyExtractor={ (client) => (client.id).toString( )}
        renderItem={ ({ item }) => (
          <List.Item
            description={item.company}
            title={item.name}
            onPress={() => navigation.navigate('Details', { item, setFetchApi })}
          />
        ) }
      />

      <FAB
        icon='plus'
        style={globalStyles.fab}
        onPress={() => navigation.navigate('Form', { setFetchApi }) }
      />
    </View>
  );
}

export default Index;
