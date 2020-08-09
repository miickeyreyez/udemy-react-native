import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

const Animation = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      animation,
      {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      },
    ).start();
  }, []);

  return (
    <Animated.View style={{ opacity: animation }}>
      <Text style={styles.text}>
        Animation
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation;
