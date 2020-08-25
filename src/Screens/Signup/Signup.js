import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ImageBackground, Image, TextInput } from "react-native";
import { Ionicons, Feather, SimpleLineIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { DropDown } from "../../Components";
import styles from "./Styles";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [check_email, setcheck_email] = useState(false);

  const EmailInputChange = (val) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isVlaid = re.test(String(email).toLowerCase());
    if (isVlaid) {
      setEmail(val);
      setcheck_email(true);
    } else {
      setEmail(val);
      setcheck_email(false);
    }
  };

  const userType = ["Nail Artist", "Nail Artist"];
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles._header}>
        <ImageBackground
          source={require("./../../Assests/header_bg.png")}
          style={{ flex: 1 }}
        ></ImageBackground>
      </View>
      <Image
        source={require("./../../Assests/logo.png")}
        style={styles._logo}
      />
      <View style={styles._form}>
        {/* user name */}
        <View style={styles.action}>
          <Feather name="user" color="rgb(138,141,144)" size={20} />
          <TextInput
            placeholder="Daniel William"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.textInputChange(val)}
          />
          <Feather name="check-circle" color="white" size={20} />
        </View>
        {/* email */}

        <View
          style={[
            styles.action,
            check_email
              ? { borderColor: "rgb(177,77,221)" }
              : { borderColor: "rgb(238,238,238)" },
          ]}
        >
          <Feather
            name="mail"
            color={check_email ? "rgb(177,77,221)" : "rgb(138,141,144)"}
            size={18}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => EmailInputChange(val)}
          />
          <Ionicons
            name="ios-checkmark-circle"
            color={check_email ? "rgb(177,77,221)" : "rgb(138,141,144)"}
            size={20}
          />
        </View>
        {/* password */}
        <View style={styles.action}>
          <SimpleLineIcons name="lock" color="rgb(138,141,144)" size={20} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.textInputChange(val)}
          />
        </View>
        {/*confirm password */}
        <View style={styles.action}>
          <SimpleLineIcons name="lock" color="rgb(138,141,144)" size={20} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => this.textInputChange(val)}
          />
        </View>
        <Text style={styles._heading}>Sign up as</Text>
        {/* DropDown */}

        <LinearGradient
          // Button Linear Gradient
          colors={["rgb(187,86,232)", "rgb(177,77,221)"]}
          style={styles._dropdown_view}
        >
          <DropDown style={styles._dropdown} data={userType} />
        </LinearGradient>

        {/* signup button */}
        <View style={styles._signup_view}>
          <LinearGradient
            // Button Linear Gradient
            colors={["rgb(187,86,232)", "rgb(177,77,221)"]}
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
              Sign Up
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
