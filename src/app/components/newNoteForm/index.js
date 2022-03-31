import React, { useState } from 'react'
import { View, Alert, Modal, Text, TextArea, StyleSheet, Pressable, TextInput } from 'react-native'

const NewNoteForm = ({ modalVisible, setModalVisible, addNewNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const submitNote = () => {
    if (title === "" || text === "") {
      new Alert("You can't add an empty note. Please write down some text");
    } else {
      addNewNote({ title, text, dynamicStyles: {bold, italic} });
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
  }

  const changeFontStyle = {
    padding: 10,
    fontSize: 16,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
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
            onChangeText={setText}
            value={text}
            placeholder="Tap here to add some text"
            multiline={true}
            numberOfLines={4}
          />

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setBold(!bold)}
            >
              <Text style={styles.textStyle}>{bold ? "Unbold me" : "Bold me"}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setItalic(!italic)}
            >
              <Text style={styles.textStyle}>{italic ? "Unitalic me" : "Italic me"}</Text>
            </Pressable>

          </View>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => submitNote()}
          >
            <Text style={styles.textStyle}>Add note</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => emptyNote()}
          >
            <Text style={styles.textStyle}>Empty note</Text>
          </Pressable>


          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Close modal</Text>
          </Pressable> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  titleInput: {
    margin: 12,
    padding: 10,
    fontSize: 24,
  },
  textInput: {
    // margin: 12,
    padding: 10,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#fffff",
  },
  buttonClose: {
    backgroundColor: "#ff55dd",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default NewNoteForm;