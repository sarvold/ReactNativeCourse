import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/goalInput';
import Item from './components/item';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [namesList, setNamesList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setNamesList((currentGoals) => {
      return currentGoals.filter((i) => i.id !== id);
    });
  }
  function addNameHandler(enteredNameText) {
    setNamesList((currentNames) => [
      ...currentNames,
      { text: enteredNameText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title={'Add new goal'}
          color={'#a065ec'}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addNameHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.listContainer}>
          {/* <ScrollView>
          <Text>Added so far...</Text>
          {namesList.map((name) => (
            <View style={styles.item} key={Math.random() + name}>
              <Text style={styles.itemText}>{name}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={namesList}
            renderItem={(itemData) => {
              return (
                <Item
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    borderWidth: 3,
    margin: 25,
    marginTop: 35,
    flex: 1,
  },
  listContainer: {
    borderWidth: 2,
    flex: 5,
  },
});
