import React, {useState, useMemo} from 'react';
import {View, Alert, Modal, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import { updateTextStyles } from '../../../../../utils/updateTextStyles';
import newFormUtils from '../../../../../utils/newFormUtils';

const NewNoteForm = ({modalVisible, setModalVisible, addNewNote}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // Add a new note with the given function via props
  // Finally, reset our inputs for the next note
  const submitNote = () => {
    if (title === '') {
      Alert.alert("You can't add a note without a title. Please write it.");
    } else if (text === '') {
      Alert.alert("You can't add an empty note. Please write down some text.");
    } else {
      addNewNote({title, text, dynamicStyles: {bold, italic}});
      emptyNote();
      setModalVisible(false);
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
  const newStyles = useMemo(() => updateTextStyles(bold, italic), [bold, italic]);

  const {updateText, deleteLastChar} = newFormUtils(text, setText, setWordCount);

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
          <Text style={styles.modalText}>Add a new note!</Text>
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
              <Text style={styles.buttonTextStyle}>Save note</Text>
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
