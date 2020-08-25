import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, SimpleLineIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function ChangePassword(props) {
  const [oldpass, setoldpass] = useState("");
  const [newpass, setnewpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");

  const [check_old_pass, setcheck_old_pass] = useState(false);
  const [check_new_pass, setcheck_new_pass] = useState(false);
  const [check_confirm_pass, set_comfirm_pass] = useState(false);

  const oldPassword = (val) => {
    if (val.length >= 7) {
      setoldpass(val);
      setcheck_old_pass(true);
    } else {
      setoldpass(val);
      setcheck_old_pass(false);
    }
  };

  const newPassword = (val) => {
    if (val.length >= 7) {
      setnewpass(val);
      setcheck_new_pass(true);
    } else {
      setnewpass(val);
      setcheck_new_pass(false);
    }
  };

  const confirmedPassword = (val) => {
    if (val.length >= 7) {
      setconfirmpass(val);
      set_comfirm_pass(true);
    } else {
      setconfirmpass(val);
      set_comfirm_pass(false);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles._header}>
        <Ionicons
          name="md-arrow-back"
          size={24}
          color="black"
          onPress={() => props.navigation.navigate("Artist")}
        />
        <Text style={styles._text}>Change Password</Text>
        <Text></Text>
      </View>

      <View style={styles._form}>
        <View>
          {/* OLD PASSWORD */}
          <Text style={styles._heading}>Old password</Text>
          <View
            style={[
              styles.action,
              check_old_pass
                ? { borderColor: "rgb(177,77,221)" }
                : { borderColor: "rgb(238,238,238)" },
            ]}
          >
            <SimpleLineIcons
              name="lock"
              color={check_old_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"}
              size={15}
            />
            <TextInput
              placeholder="Enter old  password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(val) => oldPassword(val)}
            />
            <Ionicons
              name="ios-checkmark-circle"
              color={check_old_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"}
              size={20}
            />
          </View>

          {/* NEW PASSWORD */}
          <Text style={styles._heading}>New password</Text>

          <View
            style={[
              styles.action,
              check_new_pass
                ? { borderColor: "rgb(177,77,221)" }
                : { borderColor: "rgb(238,238,238)" },
            ]}
          >
            <SimpleLineIcons
              name="lock"
              color={check_new_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"}
              size={15}
            />
            <TextInput
              placeholder="Enter new password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(val) => newPassword(val)}
            />
            <Ionicons
              name="ios-checkmark-circle"
              color={check_new_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"}
              size={20}
            />
          </View>

          {/* CONFIRM NEW PASSWORD */}
          <Text style={styles._heading}>Confirm New password</Text>

          <View
            style={[
              styles.action,
              check_confirm_pass
                ? { borderColor: "rgb(177,77,221)" }
                : { borderColor: "rgb(238,238,238)" },
            ]}
          >
            <SimpleLineIcons
              name="lock"
              color={
                check_confirm_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"
              }
              size={15}
            />
            <TextInput
              placeholder="Enter confirm password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(val) => confirmedPassword(val)}
            />
            <Ionicons
              name="ios-checkmark-circle"
              color={
                check_confirm_pass ? "rgb(177,77,221)" : "rgb(138,141,144)"
              }
              size={20}
            />
          </View>
        </View>

        {/* signup button */}
        <LinearGradient
          // Button Linear Gradient
          colors={["rgb(187,86,232)", "rgb(132,37,174)"]}
          style={styles._signup}
        >
          <Text
            onPress={() => props.navigation.navigate("Artist")}
            style={{
              backgroundColor: "transparent",
              fontSize: 15,
              color: "#fff",
            }}
          >
            Save Settings
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "(rgb(255,255,255)",
    padding: 20,
    paddingBottom: 0,
  },
  _header: {
    // padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _text: {
    fontWeight: "bold",
    fontSize: 16,
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
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  _heading: {
    padding: 10,
    paddingTop: 20,
    fontSize: 16,
  },
  _dropdown: {
    borderBottomWidth: 0,
  },
  _signup: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    padding: 15,
  },
});
