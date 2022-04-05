import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import NewNoteForm from '../../components/NewNoteForm';
import NoteList from './components/NoteList';
import styles from './styles';

const History = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const handleNotePressed = (note) => {
    setCurrentNote(note);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <NoteList  handleNotePressed={handleNotePressed}/>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </Pressable>
      <NewNoteForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        currentNote={currentNote}
      />
    </View>
  );
};

export default History;
