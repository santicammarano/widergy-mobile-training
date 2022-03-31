import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Note = ({ id, title, text, dynamicStyles, deleteNote }) => {

  const setDynamicStyles = {
    fontWeight: dynamicStyles?.bold ? "bold" : "normal",
    fontStyle: dynamicStyles?.italic ? "italic" : "normal",
  }

  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#d4d4d4", padding: 20, width: 350, margin: 5, borderRadius: 5 }}>
      <View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={[styles.noteText, setDynamicStyles]}>{text}</Text>
      </View>
      <View>      
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => deleteNote(id)}
        >
          <Text>X</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  noteText: {
  },
  button: {
    borderRadius: 5,
    padding: 7,
    backgroundColor: "red",
  },

})

export default Note;
