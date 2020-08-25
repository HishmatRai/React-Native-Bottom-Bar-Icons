import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#eae8e8",
  },
  _header: {
    height: 150,
    marginBottom: 60,
  },
  _sub_header:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:30,
      padding:10
  },
  _avatar: {
    height: 120,
    width: 120,
  },
  _user_profile: {
    alignSelf: "center",
    height: 120,
    width: 120,
    marginTop: -40,
    position: "absolute",
    bottom: 0,
    marginBottom: -50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  _active: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: "rgb(54,189,102)",
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  _user_name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  _type: {
    textAlign: "center",
    color: "grey",
    fontWeight: "bold",
  },
  _rating_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default styles;
