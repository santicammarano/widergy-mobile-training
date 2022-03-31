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
    { id: 1, title: "First note", text: "Text for first note", dynamicStyles: {} },
    { id: 2, title: "Second note", text: "Text for second note", dynamicStyles: {} },
    { id: 3, title: "Third note", text: "Text for third note", dynamicStyles: {} },
  ]


  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState(initialValue);


  const addNewNote = (note) => {
    note.id = Math.floor(Math.random() * 100 + 1);
    setNotes([...notes, note]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f3f3', height: '100%', paddingTop: 20 }}>
      <Text style={styles.title}>NOTIFY</Text>
      <NoteList notes={notes} deleteNote={deleteNote} />
      <ActionButton onPress={() => setModalVisible(!modalVisible)} />
      <NewNoteForm modalVisible={modalVisible} setModalVisible={setModalVisible} addNewNote={addNewNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
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
