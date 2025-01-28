import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  input: {
    borderColor: "#000000",
    borderWidth: 1,
  },

  buttonIcons: {
   justifyContent: "center",
   alignContent: "space-around",
   flexDirection: "row",
   gap: 30,
   marginTop: 30
  },

  button: {
   justifyContent: "center",
   alignContent: "space-around",
   flexDirection: "row",
   gap: 30,
   marginTop: 30,
  },
  
  buttonTextAdd: {
   justifyContent: "center",
   alignContent: "space-around",
   flexDirection: "row",
   gap: 30,
   marginTop: 30,
   borderRadius: 25,
   borderWidth: 1,
   borderColor: "green",
   paddingVertical: 10,
   paddingHorizontal: 20,
   color: "green",
  },

  buttonTextCancel: {
   justifyContent: "center",
   alignContent: "space-around",
   flexDirection: "row",
   gap: 30,
   marginTop: 30,
   borderRadius: 25,
   paddingVertical: 10,
   paddingHorizontal: 20,
  },

  icon: {
   borderRadius: 50,
   backgroundColor: "#000000",
   padding: 20
  }
});
