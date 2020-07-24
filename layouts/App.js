/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      {/* <View style={styles.container}>
        <View style={styles.box1} ></View>
        <View style={styles.box2} ></View>
        <View style={styles.box3} ></View>
        <View style={styles.box4} ></View>
      </View> */}
      <ScrollView>
        <View style= {{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
              Que hacer en París...
          </Text>
        </View>

        <ScrollView horizontal>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad1.jpg')} />
          </View>

          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad2.jpg')} />
          </View>

          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad3.jpg')} />
          </View>

          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad4.jpg')} />
          </View>

          <View>
            <Image
              style={styles.city}
              source={require('./assets/img/actividad5.jpg')} />
          </View>
        </ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>
              Mejores destinos
          </Text>
        </View>

        <ScrollView>
          <View>
            <Image
              style={styles.best}
              source={require('./assets/img/mejores1.jpg')} />
          </View>

          <View>
            <Image
              style={styles.best}
              source={require('./assets/img/mejores2.jpg')} />
          </View>

          <View>
            <Image
              style={styles.best}
              source={require('./assets/img/mejores3.jpg')} />
          </View>
        </ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>
              Hospedaje en LA
          </Text>
        </View>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              style={styles.lodging}
              source={require('./assets/img/hospedaje1.jpg')} />
          </View>

          <View style={styles.listItem}>
            <Image
              style={styles.lodging}
              source={require('./assets/img/hospedaje2.jpg')} />
          </View>

          <View style={styles.listItem}>
            <Image
              style={styles.lodging}
              source={require('./assets/img/hospedaje3.jpg')} />
          </View>

          <View style={styles.listItem}>
            <Image
              style={styles.lodging}
              source={require('./assets/img/hospedaje4.jpg')} />
          </View>
        </View>


      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 10,
  },
  best: {
    height: 200,
    marginVertical: 5,
    width: '100%',
  },
  city: {
    height: 300,
    marginRight: 10,
    width: 250,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '49%',
  },
  lodging: {
    height: 200,
    marginVertical: 5,
    width: '100%',
  },
});

// const styles = StyleSheet.create({
// container: {
//   backgroundColor: 'cornflowerblue',
//   flex: 1,
//   // Alinear verticalmente
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   // Alinear horizontalmente
//   // flexDirection: 'column',
//   // justifyContent: 'center',
// },
// box1: {
//   padding: 20,
//   backgroundColor: 'navy',
//   // flex: 1,
// },
// box2: {
//   padding: 20,
//   backgroundColor: 'yellow',
//   // flex: 1,
// },
// box3: {
//   padding: 20,
//   backgroundColor: 'green',
//   // flex: 1,
// },
// box4: {
//   padding: 20,
//   backgroundColor: 'teal',
//   // flex: 1,
// },
// });

export default App;
