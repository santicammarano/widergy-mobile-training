import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Note from '../Note';
import styles from './styles';
import {useSelector} from 'react-redux';

const NoteList = props => {
  const {notes, getNotesLoading} = useSelector(state => state);
  const renderNote = ({item}) => <Note key={item.id} {...item} {...props} />;

  return (
    <View style={styles.listContainer}>
      {getNotesLoading ? (
        <ActivityIndicator size="large" />
      ) : notes.length >= 1 ? (
        <FlatList data={notes} renderItem={renderNote} />
      ) : (
        <Text>Start adding some notes!</Text>
      )}
    </View>
  );
};

export default NoteList;
