import React from 'react';
import {View, Text, Button} from 'react-native';

const History = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to the history section!</Text>
      <Text>You will be able to see your notes here in the future</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />;
    </View>
  );
};

export default History;
