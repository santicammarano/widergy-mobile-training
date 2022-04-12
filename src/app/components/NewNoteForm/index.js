import React, {useState, useEffect, useMemo} from 'react';
import {View, Alert, Modal, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {updateTextStyles} from '../../../utils/updateTextStyles';
import newNoteFormUtils from '../../../utils/newNoteFormUtils';
import {useDispatch} from 'react-redux';
import {actionsCreator} from '../../../redux/notesApi/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Eicon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const NewNoteForm = ({
  modalVisible,
  setModalVisible,
  navigation,
  currentNote,
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const dispatch = useDispatch();
  const addNote = actionsCreator.addNote;
  const editNote = actionsCreator.editNote;

  useEffect(() => {
    updateCurrentNote(currentNote);
  }, [currentNote, updateCurrentNote]);

  const submitNote = () => {
    if (!title || title === '') {
      Alert.alert(
        "You can't add/edit a note without a title. Please write it.",
      );
    } else if (!text || text === '') {
      Alert.alert(
        "You can't add/edit an empty note. Please write down some text.",
      );
    } else {
      const id = currentNote?.id;
      !currentNote
        ? dispatch(addNote({title, text, dynamicStyles: {bold, italic}}))
        : dispatch(editNote({id, title, text, dynamicStyles: {bold, italic}}));

      emptyNote();
      setModalVisible(false);
      navigation.navigate('History');
    }
  };

  // Empty our inputs/outputs
  const emptyNote = () => {
    setTitle('');
    setText('');
    setBold(false);
    setItalic(false);
    setWordCount(0);
  };

  // Dynamic styles for the inputs
  const newStyles = useMemo(
    () => updateTextStyles(bold, italic),
    [bold, italic],
  );

  const {updateText, deleteLastChar, updateCurrentNote} = newNoteFormUtils(
    text,
    setText,
    setWordCount,
    setTitle,
    setBold,
    setItalic,
    currentNote,
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.closeButtonContainer}
            onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="close" style={styles.closeButton} />
          </Pressable>

          <Text style={styles.modalText}>
            {currentNote ? 'Edit' : 'Add'} a note
          </Text>
          <TextInput
            style={styles.titleInput}
            onChangeText={setTitle}
            value={title}
            placeholder="Untitled"
          />
          <TextInput
            style={[styles.textInput, newStyles]}
            onChangeText={newText => updateText(newText)}
            value={text}
            placeholder="Tap here to add some text"
            multiline={true}
            numberOfLines={4}
          />

          <View style={styles.wordContainer}>
            <Text
              style={styles.wordCountText}>{`Wordcount: ${wordCount}`}</Text>
            <Pressable onPress={() => deleteLastChar()}>
              <Eicon name="erase" style={styles.toolButton} />
            </Pressable>
          </View>

          <View style={styles.toolsContainer}>
            <Pressable onPress={() => setBold(!bold)}>
              <Icon name="format-bold" style={styles.toolButton} />
            </Pressable>
            <Pressable onPress={() => setItalic(!italic)}>
              <Icon name="format-italic" style={styles.toolButton} />
            </Pressable>
            <Pressable onPress={() => emptyNote()}>
              <Icon name="autorenew" style={styles.toolButton} />
            </Pressable>
          </View>

          <Pressable onPress={() => submitNote()}>
            <LinearGradient
              colors={['#ed686e', '#ec5459']}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                {currentNote ? 'Save' : 'Submit'} note
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default NewNoteForm;
