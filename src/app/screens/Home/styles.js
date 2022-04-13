import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  description: {
    textAlign: 'center',
  },
  historyButton: {
    borderRadius: 4,
    padding: 6,
    elevation: 2,
    margin: 10,
    backgroundColor: '#ed686e',
  },
  historyButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default styles;
