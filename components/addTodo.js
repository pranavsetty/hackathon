import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button,Text } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='add a new todo in here...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button onPress={() => submitHandler(text)} title='ADD TO LIST ' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
