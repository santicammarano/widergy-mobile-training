import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Note from '../Note';
import styles from './styles';
import {useSelector} from 'react-redux';

const NoteList = ({...props}) => {
  const notes = useSelector(state => state.notes);

  const renderNote = ({item}) => <Note {...item} {...props}/>;

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
