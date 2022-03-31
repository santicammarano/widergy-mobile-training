import React, { useState, useEffect } from 'react';
import NoteList from './src/app/components/NoteList';
import NewNoteForm from './src/app/components/newNoteForm';
import ActionButton from 'react-native-simple-action-button';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const initialValue = [
    { id: 1, title: "First note", text: "Text for first note" },
    { id: 2, title: "Second note", text: "Text for second note" },
    { id: 3, title: "Third note", text: "Text for third note" },
    // { id: 4, title: "Third note", text: "Text for third note" },
    // { id: 5, title: "Third note", text: "Text for third note" },
    // { id: 6, title: "Third note", text: "Text for third note" },
    // { id: 7, title: "Third note", text: "Text for third note" },
    // { id: 8, title: "Third note", text: "Text for third note" },
  ]


  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState(initialValue);


  const addNewNote = (note) => {
    note.id = Math.floor(Math.random() * 100 + 1);
    setNotes([...notes, note]);
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f3f3', height: '100%', paddingTop: 20 }}>
      <NoteList notes={notes} />
      <ActionButton onPress={() => setModalVisible(!modalVisible)} />
      <NewNoteForm modalVisible={modalVisible} setModalVisible={setModalVisible} addNewNote={addNewNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
