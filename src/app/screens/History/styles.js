import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  homeButton: {
    borderRadius: 4,
    padding: 6,
    elevation: 2,
    margin: 10,
    backgroundColor: '#ed686e',
  },
  homeButtonText: {
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default styles;
