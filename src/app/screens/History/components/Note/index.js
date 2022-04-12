import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {actionsCreator} from '../../../../../redux/notesApi/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Note = ({id, title, text, dynamicStyles, handleNotePressed}) => {
  const setDynamicStyles = {
    fontWeight: dynamicStyles?.bold ? 'bold' : 'normal',
    fontStyle: dynamicStyles?.italic ? 'italic' : 'normal',
  };

  const dispatch = useDispatch();
  const {deleteNote} = actionsCreator;

  return (
    <Pressable
      onPress={() => handleNotePressed({id, title, text, dynamicStyles})}>
      <View style={styles.noteContainer}>
        <View>
          <Text style={styles.noteTitle}>{title}</Text>
          <Text style={[styles.noteText, setDynamicStyles]}>{text}</Text>
        </View>
        <View>
          <Pressable
            style={styles.closeButton}
            onPress={() => dispatch(deleteNote({id, title, text, dynamicStyles}))}>
            <Icon name="close" style={styles.closeButton} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Note;
