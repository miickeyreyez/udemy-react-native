import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Animation6 = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation1, {
          toValue: 60,
          duration: 500,
        }),
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
        }),
      ]),
    ).start();
  }, []);

  const animationStyle = {
    transform: [
      { translateX: animation2 },
      { translateY: animation1 },
    ],
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.View style={[styles.box, animationStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 10,
    width: 10,
    backgroundColor: 'cornflowerblue',
  }
})

export default Animation6;
