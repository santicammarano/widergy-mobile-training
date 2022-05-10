import React, {useState} from 'react';
import {Text, View, Pressable, Image, ImageBackground} from 'react-native';
import styles from './styles';
import ActionButton from 'react-native-simple-action-button';
import NewNoteForm from '../../components/NewNoteForm';
import image from '../../assets/wave.png';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image}>
        <View style={styles.mainWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/notas.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>NOTIFY</Text>
            <Text style={styles.welcome}>A place for your notes</Text>
            {/* <Text style={styles.description}>
              In this page, you can add a new note by pressing the button on the
              bottom of the screen
            </Text> */}
          </View>
          <Pressable
            onPress={() => navigation.navigate('History')}
            style={styles.historyButton}>
            <Text style={styles.historyButtonText}>my notes</Text>
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
      </ImageBackground>
    </View>
  );
};

export default Home;
