import React, {useState} from 'react';
import NoteList from './components/NoteList';
import NewNoteForm from './components/newNoteForm';
import ActionButton from 'react-native-simple-action-button';
import noteUtils from '../../../utils/noteUtils';

import {Text, View} from 'react-native';
import styles from './styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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

  const {addNewNote, deleteNote} = noteUtils(notes, setNotes);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>NOTIFY</Text>
      <Pressable
        onPress={() => navigation.navigate('History')}
        style={styles.historyButton}>
        <Text style={styles.historyButtonText}>History</Text>
      </Pressable>
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

export default Home;
