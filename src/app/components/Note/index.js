import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Note = ({id, title, text, dynamicStyles, deleteNote}) => {
  const setDynamicStyles = {
    fontWeight: dynamicStyles?.bold ? 'bold' : 'normal',
    fontStyle: dynamicStyles?.italic ? 'italic' : 'normal',
  };

  return (
    <View style={styles.noteContainer}>
      <View>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={[styles.noteText, setDynamicStyles]}>{text}</Text>
      </View>
      <View>
        <Pressable style={styles.closeButton} onPress={() => deleteNote(id)}>
          <Text>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Note;
