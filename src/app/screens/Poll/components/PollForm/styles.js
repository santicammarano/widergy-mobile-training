import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ed686e',
    height: 50,
    marginTop: 10,
    width: 350,
  },

  submitText: {
    color: 'white',
    fontSize: 20,
  },

  cancelButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 50,
    marginTop: 10,
    width: 350,
  },

  cancelText: {
    color: 'white',
    fontSize: 20,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    width: 350,
    margin: 10,
    padding: 10,
  },

  requiredWarning: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
