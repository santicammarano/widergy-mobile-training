import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Note from '../Note';
import styles from './styles';
import {useDispatch, useSelector} from "react-redux"

const NoteList = ({deleteNote}) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  
  return (
    <View style={styles.listContainer}>
      {notes.length >= 1 ? (
        <FlatList
          data={notes}
          renderItem={({item}) => <Note {...item} deleteNote={deleteNote} />}
        />
      ) : (
        <Text>Start adding some notes!</Text>
      )}
    </View>
  );
};

export default NoteList;
