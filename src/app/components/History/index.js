import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';


const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the history section!</Text>
      <Text>You will be able to see your notes here in the future</Text>
      {/* <Icon name="rocket" size={30} color="#900" />; */}
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </Pressable>
    </View>
  );
};

export default History;
