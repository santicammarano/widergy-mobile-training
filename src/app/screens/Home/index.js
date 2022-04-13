import React, {useState} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import styles from './styles';
import ActionButton from 'react-native-simple-action-button';
import NewNoteForm from '../../components/NewNoteForm';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>NOTIFY</Text>
      <Image
        style={styles.logo}
        source={require('../../assets/note-icon.png')}
      />
      <View>
        <Text style={styles.description}>Welcome to Notify</Text>
        <Text style={styles.description}>
          In this page, you can add a new note by pressing the button on the
          bottom of the screen
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('History')}
        style={styles.historyButton}>
        <Text style={styles.historyButtonText}>History</Text>
      </Pressable>
      <ActionButton
        buttonColor="#ed686e"
        onPress={() => setModalVisible(!modalVisible)}
      />
      <NewNoteForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </View>
  );
};

export default Home;
