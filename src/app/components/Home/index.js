import React, {useState, useEffect} from 'react';
import NoteList from './components/NoteList';
import NewNoteForm from './components/newNoteForm';
import ActionButton from 'react-native-simple-action-button';

import {Text, View, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
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

  // Initializated in 2 for development purposes only (:
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
      <Button title="Home" onPress={() => navigation.navigate('Home')} />;
    </View>
  );
};

export default Home;
