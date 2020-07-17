import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

import text from './text';

const Appoinment = ({ appoinment, deletePatient }) => {
  const deleteAppoinment = (id) => {
    deletePatient(id);
  };

  return (
    <View style={styles.appoinment}>
      <View>
        <Text style={styles.label}>
          {text.patient}
        </Text>
        <Text style={styles.text}>
          { appoinment.patient }
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          {text.owner}
        </Text>
        <Text style={styles.text}>
          { appoinment.owner }
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          {text.symptoms}
        </Text>
        <Text style={styles.text}>
          { appoinment.symptoms }
        </Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => deleteAppoinment(appoinment.id)}
          style={styles.deleteButton}>
          <Text style={styles.deleteText}>
            { text.button } &times;
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  appoinment: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    marginVertical: 10,
    padding: 10,
  },
  deleteText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  }
});

export default Appoinment;
