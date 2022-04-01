import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Note from '../Note';
import styles from './styles';

const NoteList = ({notes, deleteNote}) => {
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
