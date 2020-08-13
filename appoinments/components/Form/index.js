import React, { Fragment, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortId from 'shortid';
import text from './text';

const Form = ({ appoinments, setAppoinments, setAppoinmentsStorage, setShowForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleDateConfirm = (d) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    setDate(d.toLocaleDateString('es-ES', options));
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);

  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleTimeConfirm = (t) => {
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    };
    setTime(t.toLocaleTimeString('en-US', options));
    hideTimePicker();
  };

  const addAppoinment = () => {
    const isValid = [
      patient,
      owner,
      phone,
      date,
      time,
      symptoms,
    ].every((field) => field.trim() !== '');

    if (!isValid) {
      showAlert('invalidForm');
      return;
    }

    const appointment = {
      id: shortId.generate(), patient, owner, phone, date, time, symptoms,
    };

    const temp = [...appoinments, appointment];

    setAppoinments(temp);
    setAppoinmentsStorage(JSON.stringify(temp));
    setShowForm(false);
};

  const showAlert = (err) => {
    error = text.errors[err];

    const { title, subtitle, buttons } = error;
    const { accept } = buttons;

    Alert.alert(title, subtitle, [{ text: accept }]);
  }

  return (
    <Fragment>
      <ScrollView style={styles.form}>

        <View>
          <Text style={styles.label}>
            { text.patient }:
          </Text>

          <TextInput
            onChangeText={(inputText) => setPatient(inputText)}
            style={styles.input} />
        </View>

        <View>
          <Text style={styles.label}>
            { text.owner }:
          </Text>

          <TextInput
            onChangeText={(inputText) => setOwner(inputText)}
            style={styles.input} />
        </View>

        <View>
          <Text style={styles.label}>
            { text.phone }:
          </Text>

          <TextInput
            keyboardType='numeric'
            onChangeText={(inputText) => setPhone(inputText)}
            style={styles.input} />
        </View>

        <View>
          <Text style={styles.label}>{ text.date }:</Text>
          <Text>{ date }</Text>
        </View>

        <View>
          <Button title={text.pickers.date} onPress={showDatePicker} />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode='date'
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            locale='es_ES'
            headerTextIOS={text.date}
            cancelTextIOS={text.buttons.cancel}
            confirmTextIOS={text.buttons.confirm}
          />
        </View>

        <View>
          <Text style={styles.label}>{ text.time }:</Text>
          <Text>{ time }</Text>
        </View>

        <View>
          <Button title={text.pickers.time} onPress={showTimePicker} />

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode='time'
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
            locale='es_ES'
            headerTextIOS={text.time}
            cancelTextIOS={text.buttons.cancel}
            confirmTextIOS={text.buttons.confirm}
          />
        </View>

        <View>
          <Text style={styles.label}>
            { text.symptoms }:
          </Text>

          <TextInput
            multiline
            onChangeText={(inputText) => setSymptoms(inputText)}
            style={styles.input} />
        </View>

        <View>
          <TouchableHighlight
            onPress={() => addAppoinment()}
            style={styles.submitButton}>

            <Text style={styles.submitText}>
              { text.buttons.add } &times;
            </Text>

          </TouchableHighlight>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    marginHorizontal: '2.5%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    borderColor: '#e1e1e1',
    borderWidth: 1,
    height: 50,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#7D024E',
    marginVertical: 10,
    padding: 10,
  },
  submitText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
