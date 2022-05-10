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
    fontWeight: '600',
  },

  cancelButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303236',
    height: 50,
    marginTop: 10,
    width: 350,
  },

  cancelText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    width: 350,
    marginVertical: 2,
    padding: 10,
  },

  inputContainer: {
    marginVertical: 7,
  },

  requiredWarning: {
    color: 'red',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    color: '#ed686e',
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default styles;
