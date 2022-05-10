import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 10,
  },
  homeButton: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    margin: 10,
    width: 350,
    backgroundColor: '#ed686e',
  },
  homeButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default styles;
