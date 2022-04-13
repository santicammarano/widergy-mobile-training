import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  noteContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d4d4d4",
    padding: 20,
    width: 350,
    margin: 5,
    borderRadius: 5,
  },
  noteTitle: {
    fontSize: 20,
  },
  noteText: {
    fontSize: 13,
  },
  closeButton: {
    // borderRadius: 5,
    // padding: 7,
    // backgroundColor: "red",4
  },

})

export default styles;
