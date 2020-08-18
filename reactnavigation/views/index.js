import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Index = ({ navigation }) => {
  const info = {
    id: 20,
    total: 400,
  };

  const visitUs = () => navigation.navigate('Us', info);
  
  return (
    <View style={styles.container}>
      <Text>
        Inicio
      </Text>

      <Button
        title='Ir a Nosotros'
        onPress={ () => visitUs() }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default Index;
