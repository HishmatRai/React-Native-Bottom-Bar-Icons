import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _header: {
    height: 120,
  },
  _logo: {
    alignSelf: "center",
    marginTop: 10,
    height: 120,
    width: 120,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "rgb(238,238,238)",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  _form: {
    padding: 15,
  },
  _heading: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  _dropdown: {
    borderBottomWidth: 0,
  },
  _dropdown_view: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    paddingLeft: 50,
    // paddingRight: 50,
    // justifyContent:"center"
  },
  _signup: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    padding: 15,
    // paddingLeft: 50,
  },
  _signup_view: {
    borderTopWidth: 1,
    paddingTop: 30,
    marginTop: 30,
    borderColor: "rgb(238,238,238)",
  },
});

export default styles;
