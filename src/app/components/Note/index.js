import React from 'react';
import { View, Text } from 'react-native'

const Note = ({ title, text }) => {
  return (
    <View style={{backgroundColor: "grey", padding: 20, width: 350, margin: 5}}>
      <Text style={{fontSize: 20}}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default Note;
