import React, {useState, useEffect, useMemo} from 'react';
import {View, Alert, Modal, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import {updateTextStyles} from '../../../utils/updateTextStyles';
import newFormUtils from '../../../utils/newFormUtils';
import {useDispatch} from 'react-redux';
import {actionsCreator} from '../../../redux/notesApi/actions';

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
  const {addNote, editNote} = actionsCreator;

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

  const {updateText, deleteLastChar, updateCurrentNote} = newFormUtils(
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
          <Text style={styles.modalText}>
            {currentNote ? 'Edit' : 'Add'} a new note!
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

          <Text style={styles.wordCountText}>{`Wordcount: ${wordCount}`}</Text>

          <View style={styles.flexRow}>
            <Pressable style={styles.button} onPress={() => setBold(!bold)}>
              <Text style={styles.buttonTextStyle}>B</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setItalic(!italic)}>
              <Text style={styles.buttonTextStyle}>i</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => deleteLastChar()}>
              <Text style={styles.buttonTextStyle}>Del</Text>
            </Pressable>
          </View>

          <View style={styles.flexRow}>
            <Pressable style={styles.button} onPress={() => emptyNote()}>
              <Text style={styles.buttonTextStyle}>Empty</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => submitNote()}>
              <Text style={styles.buttonTextStyle}>
                {currentNote ? 'Save' : 'Submit'} note
              </Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.buttonTextStyle}>Close modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default NewNoteForm;
