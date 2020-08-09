import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';

const Animation4 = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      animation,
      {
        toValue: 360,
        duration: 500,
        useNativeDriver: false,
      },
    ).start();
  }, []);

  const interpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animationStyle = {
    transform: [{ rotate: interpolation }],
  };

  return (
    <Animated.View style={[styles.box, animationStyle]} />
  );
};

const styles =  StyleSheet.create({
  box: {
    backgroundColor: 'cornflowerblue',
    height: 100,
    width: 100,
  },
});

export default Animation4;
