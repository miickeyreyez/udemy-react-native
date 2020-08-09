import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Animation from './Components/Animation';
import Animation2 from './Components/Animation2';
import Animation3 from './Components/Animation3';
import Animation4 from './Components/Animation4';
import Animation5 from './Components/Animation5';
import Animation6 from './Components/Animation6';
import Animation7 from './Components/Animation7';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.content}>
        {/* <Animation /> */}
        {/* <Animation2 /> */}
        {/* <Animation3 /> */}
        {/* <Animation4 /> */}
        {/* <Animation5 /> */}
        {/* <Animation6 /> */}
        <Animation7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 100,
  },
});

export default App;
