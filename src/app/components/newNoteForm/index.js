import React, { useState } from 'react'
import { View, Alert, Modal, Text, Pressable, TextInput } from 'react-native'
import styles from "./styles"

const NewNoteForm = ({ modalVisible, setModalVisible, addNewNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const submitNote = () => {
    if (title === "") {
      new Alert.alert("You can't add a note without a title. Please write it.");
    }
    else if (text === "") {
      new Alert.alert("You can't add an empty note. Please write down some text.");
    } else {
      addNewNote({ title, text, dynamicStyles: { bold, italic } });
      setModalVisible(!modalVisible);
      setTitle("");
      setText("");
      setBold(false);
      setItalic(false);
    }
  }

  const emptyNote = () => {
    setTitle("");
    setText("");
    setBold(false);
    setItalic(false);
    setWordCount(0);
  }

  const changeFontStyle = {
    padding: 10,
    fontSize: 16,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
  }

  const updateText = (newText) => {
    setText(newText);
    setWordCount(text.trim().split(/\s+/).length);
  }

  const deleteLastChar = () => {
    setText((prevText) => prevText.slice(0, -1));
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={{ width: 300 }}
    >
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
            style={[styles.textInput, changeFontStyle]}
            onChangeText={newText => updateText(newText)}
            value={text}
            placeholder="Tap here to add some text"
            multiline={true}
            numberOfLines={4}
          />

          <Text style={styles.wordCountText}>{`Wordcount: ${wordCount}`}</Text>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Pressable
              style={styles.button}
              onPress={() => setBold(!bold)}
            >
              <Text style={styles.textStyle}>B</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => setItalic(!italic)}
            >
              <Text style={styles.textStyle}>i</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => deleteLastChar()}
            >
              <Text style={styles.textStyle}>Del</Text>
            </Pressable>
          </View>


          <View style={{ display: "flex", flexDirection: "row" }}>
            <Pressable
              style={styles.button}
              onPress={() => emptyNote()}
            >
              <Text style={styles.textStyle}>Empty</Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => submitNote()}
            >
              <Text style={styles.textStyle}>Save note</Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close modal</Text>
          </Pressable>
        </View>

      </View>
    </Modal>
  )
}

export default NewNoteForm;