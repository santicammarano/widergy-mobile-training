import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  mainWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    padding: 20,
  },
  textContainer: {
    marginVertical: 5,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#303236',
    // margin: 10,
  },
  welcome: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    fontStyle: 'italic',
  },
  description: {
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    maxWidth: 300,
  },
  historyButton: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    marginTop: 40,
    width: '50%',
    backgroundColor: '#303236',
  },
  historyButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default styles;
