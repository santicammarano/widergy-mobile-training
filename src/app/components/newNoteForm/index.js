import React, { useState } from 'react'
import { View, Alert, Modal, Text, TextArea, StyleSheet, Pressable, TextInput } from 'react-native'

const NewNoteForm = ({ modalVisible, setModalVisible, addNewNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitNote = () => {
    addNewNote({ title, text }); 
    setModalVisible(!modalVisible);
    setTitle("");
    setText("");
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
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Tap here to add some text"
            multiline={true}
            numberOfLines={4}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => submitNote()}
          >
            <Text style={styles.textStyle}>Add note</Text>
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
    margin: 12,
    padding: 10,
    fontSize: 24,
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default NewNoteForm;