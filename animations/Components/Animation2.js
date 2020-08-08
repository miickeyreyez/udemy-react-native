import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';

const Animation2 = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      animation,
      {
        toValue: 450,
        duration: 1000,
        useNativeDriver: false,
      },
    ).start();
  }, []);

  return (
    <Animated.View style={[
      styles.box,
      {
        height: animation,
        width: animation,
      },
    ]}>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'cornflowerblue',
    height: 100,
    width: 100,
  },
});

export default Animation2;
