import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  modalText: {
    color: '#ed686e',
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  wordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  toolsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    gap: 10,
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
  },
  closeButton: {
    fontSize: 18,
  },
  toolButton: {
    fontSize: 24,
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
  submitButton: {
    borderRadius: 4,
    padding: 6,
    elevation: 2,
    marginTop: 15,
    width: 120,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
