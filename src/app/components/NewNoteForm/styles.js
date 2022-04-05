import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexRow: {display: 'flex', flexDirection: 'row'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    elevation: 2,
    width: 300,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleInput: {
    margin: 12,
    padding: 10,
    fontSize: 24,
  },
  textInput: {
    fontSize: 16,
  },
  wordCountText: {
    margin: 5,
  },
  button: {
    borderRadius: 4,
    padding: 6,
    elevation: 2,
    margin: 3,
    backgroundColor: '#ed686e',
  },
  buttonClose: {
    padding: 8,
    elevation: 2,
    marginTop: 3,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
