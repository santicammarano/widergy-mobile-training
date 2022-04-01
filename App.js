import React, {useState, useEffect} from 'react';
import NoteList from './src/app/components/NoteList';
import NewNoteForm from './src/app/components/newNoteForm';
import ActionButton from 'react-native-simple-action-button';
import styles from './styles';

import {Text, View} from 'react-native';

const App = () => {
  // Initial values for the notes state
  const initialState = [
    {
      id: 1,
      title: 'First note',
      text: 'Text for first note',
      dynamicStyles: {},
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState(initialState);
  let ids = 2;

  // We return an array with the current notes plus the new note
  const addNewNote = note => {
    note.id = ids;
    ids++;
    setNotes([...notes, note]);
  };

  // We return an array with the current notes except the one we want to delete
  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>NOTIFY</Text>
      <NoteList notes={notes} deleteNote={deleteNote} />
      <ActionButton onPress={() => setModalVisible(!modalVisible)} />
      <NewNoteForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNewNote={addNewNote}
      />
    </View>
  );
};

export default App;
