import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
  const [enteredNameText, setEnteredNameText] = useState('Useless Text');

  function addGoalHandler() {
    console.log(enteredNameText);
    props.onAddGoal(enteredNameText);
    setEnteredNameText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          onChangeText={setEnteredNameText}
          placeholder="Enter a goal"
          value={enteredNameText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    padding: 15,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '35%',
    marginHorizontal: 8,
  }
});
