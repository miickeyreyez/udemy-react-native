/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Appoinment from './components/Appoinment';
import Form from './components/Form';
import texts from './text';

const App: () => React$Node = () => {
  const [showForm, setShowForm] = useState(false);
  const [appoinments, setAppoinments] = useState([
    {
      id: 1,
      patient: 'Angel',
      owner: 'Dr. Rivera',
      symptoms: 'Dolor de garganta',
    },
    {
      id: 2,
      patient: 'Angel',
      owner: 'Dr. Rivera',
      symptoms: 'Dolor de garganta',
    },
    {
      id: 3,
      patient: 'Angel',
      owner: 'Dr. Rivera',
      symptoms: 'Dolor de garganta',
    },
  ]);

  const deletePatient = (id) => {
    setAppoinments((apnts) =>  (
      apnts.filter((appoinment) => appoinment.id !== id)
    ))
  };

  const updateShowForm = () => setShowForm(!showForm);

  const closeKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={() => closeKeyboard()}>
      <View style={styles.div}>
        <Text style={styles.header}>{ texts.header }</Text>

        <View>
          <TouchableHighlight
            onPress={() => updateShowForm()}
            style={styles.showFormButton}>
            
            <Text style={styles.showFormText}>
              { showForm ? texts.buttons.showAppoinments : texts.buttons.addAppoinment } &times;
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.content}>
          {
            // appoinments.map((appoinment, index) => (
            //   <View>
            //     <Text key={index}>
            //       {appoinment.patient}
            //     </Text>
            //   </View>
            // ))
            showForm ? (
              <>
                <Text style={styles.header}>
                  { texts.newTitle }
                </Text>

                <Form
                  appoinments={appoinments}
                  setAppoinments={setAppoinments}
                  setShowForm={setShowForm} />
              </>
            )  :
              <>
                <Text style={styles.header}>
                  {
                    appoinments.length > 0 ?
                      texts.title : texts.addTitle
                  }
                </Text>

                <FlatList
                  sytle={styles.list}
                  data={ appoinments }
                  renderItem={ ({ item }) => (
                    <Appoinment
                      appoinment={item}
                      deletePatient={deletePatient} />
                  ) }
                  keyExtractor={ (appoinment) => appoinment.id }
                />
              </>          
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:  Platform.OS === 'ios' ? 10 : 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  div: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  list: {
    backgroundColor: 'red',
    flex: 1,
  },
  showFormButton: {
    backgroundColor: '#7D024E',
    marginVertical: 10,
    padding: 10,
  },
  showFormText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
