import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const Animation5 = () => {
  const [animation] = useState(new Animated.Value(1));

  const btnIn = () => {
    Animated.spring(animation, {
      toValue: .8,
      useNativeDriver: false,
    }).start();
  };

  const btnOut = () => {
    Animated.spring(animation, {
      friction: 4,
      tension: 10,
      toValue: 1,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={() => btnIn()}
        onPressOut={() => btnOut()}
      >
        <Animated.View style={[styles.button, animatedStyle]}>
          <Text style={styles.text}>
            Iniciar sesión
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    height: 80,
    width: 280,
  },
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
})

export default Animation5;
