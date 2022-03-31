import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Note from "../Note"

const NoteList = ({notes}) => {
  return (
    <View style={{ height: "90%" }}>
      {notes.length > 1 ? (
        <FlatList data={notes}
          renderItem={({ item }) => <Note {...item} />}
        />)
        : (<Text>Start adding some notes!</Text>)
      }
    </View>)
}

export default NoteList