import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import NewNoteForm from '../../components/NewNoteForm';
import NoteList from './components/NoteList';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {actionsCreator} from '../../../redux/notesApi/actions';

const History = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const dispatch = useDispatch();
  const {getNotes} = actionsCreator;

  const handleNotePressed = note => {
    setCurrentNote(note);
    setModalVisible(true);
  };

  useEffect(() => {
    dispatch(getNotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <NoteList handleNotePressed={handleNotePressed} />
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
