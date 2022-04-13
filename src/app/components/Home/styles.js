import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    height: '100%',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  historyButton: {
    borderRadius: 4,
    padding: 6,
    elevation: 2,
    margin: 10,
    backgroundColor: '#ff55dd',
  },
  historyButtonText: {
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase"
  },

});

export default styles;
