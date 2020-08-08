import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Animation7 = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animation1, {
        toValue: 300,
        duration: 1000,
      }),
      Animated.spring(animation2, {
        toValue: 10,
      }),
      Animated.spring(animation2, {
        toValue: 1,
      }),
      Animated.timing(animation1, {
        toValue: 600,
        duration: 1000,
      }),
    ]).start();
  }, []);

  const animationStyle = {
    transform: [
      { scale: animation2 },
      { translateY: animation1 },
    ],
  };

  return (
    <View>
      <Animated.View style={[styles.box, animationStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'cornflowerblue',
  }
})

export default Animation7;