import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Note from "../Note"

const NoteList = ({notes, deleteNote}) => {
  return (
    <View style={{ height: "90%" }}>
      {notes.length >= 1 ? (
        <FlatList data={notes}
          renderItem={({ item }) => <Note {...item} deleteNote={deleteNote}/>}
        />)
        : (<Text>Start adding some notes!</Text>)
      }
    </View>)
}

export default NoteList