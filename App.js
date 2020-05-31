import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard,Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Dont leave home between 7pm to 7am', key: '1' },
    { text: 'Wear a mask when walking outside', key: '2' },
    { text: 'Stay 2 meters part', key: '3' },
    { text: 'Only step out for essential services', key: '4' },

  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View>
          <Text style = {styles.note}>Note:- Lockdown rules are changing weekly based on the containment zone. </Text>
           <Text style = {styles.note}>By clicking on the proposed goverment checklist, it assures everyone that you've read the safety regulations and adhere to follow it. Feel free to add additonal items based on the personal preferences</Text>  
           <Text style = {styles.note}>Please visit gov.in/covid-guidelines for more details.</Text> 

        </View>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  note: {
    // height: 100,
    padding: 15,
  }
});