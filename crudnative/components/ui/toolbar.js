import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Toolbar = ({ navigation, route }) => {
  const handlePress = () => navigation.navigate('Form');

  return (
    <Button
      onPress={ () => handlePress() }
    >
      <Icon
        name='add-circle-outline'
        size={25}
        color='#FFF' />
    </Button>
  );
}

export default Toolbar;
