import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    justifyContent: "center",
    alignContent: "space-around",
    flexDirection: "row",
    gap: 30,
    marginTop: 30,
   },
   
   buttonTextSave: {
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
 
   buttonTextClose: {
    justifyContent: "center",
    alignContent: "space-around",
    flexDirection: "row",
    gap: 30,
    marginTop: 30,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
   },
});