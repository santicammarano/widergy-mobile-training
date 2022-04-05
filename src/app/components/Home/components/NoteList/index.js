import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Note from '../Note';
import styles from './styles';

const NoteList = ({notes, deleteNote}) => {
  const renderNote = ({item}) => <Note {...item} deleteNote={deleteNote} />;

  return (
    <View style={styles.listContainer}>
      {notes.length >= 1 ? (
        <FlatList data={notes} renderItem={renderNote} />
      ) : (
        <Text>Start adding some notes!</Text>
      )}
    </View>
  );
};

export default NoteList;
