import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

const Animation3 = () => {
  const [animation] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(
      animation,
      {
        toValue: 40,
        duration: 500,
        useNativeDriver: false,
      },
    ).start();
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.text, { fontSize: animation }]}>
        Animation
      </Animated.Text>
    </View>
  );
};

const styles =  StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation3;
