import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  noteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#303236',
    padding: 20,
    width: 350,
    margin: 5,
    borderRadius: 5,
  },
  noteTitle: {
    fontSize: 20,
    color: '#ed686e',
  },
  noteText: {
    fontSize: 13,
    color: 'white',
  },
  closeButton: {
    color: 'white',
    fontSize: 22,
  },
});

export default styles;
