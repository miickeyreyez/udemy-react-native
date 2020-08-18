import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Us = ({ navigation, route }) => {
  const { id, total } = route.params;

  // const goBack = () => navigation.navigate('Inicio');
  // const goBack = () => navigation.push('Inicio');
  const goBack = () => navigation.goBack();
  
  return (
    <View style={styles.container}>
      <Text>
        {total}
      </Text>

      <Button
        title='Volver'
        onPress={ () => goBack() }
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

export default Us;
