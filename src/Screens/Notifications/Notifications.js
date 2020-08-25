import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function Notifications() {
  let notifications = [
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Dorothea",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Annamarie",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Brielle",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Juston",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Viviane",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Myron",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Eudora",
      desc: "Booked an appointment",
      ago: "15m",
    },
    {
      uri: require("./../../Assests/profile_bg.png"),
      name: "Antonia",
      desc: "Booked an appointment",
      ago: "15m",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles._header}>
        <ImageBackground
          source={require("./../../Assests/profile_bg.png")}
          style={{ flex: 1 }}
        >
          <View style={styles._sub_header}>
            <FontAwesome name="align-left" size={24} color="white" />
            <MaterialIcons
              name="settings"
              size={30}
              color="white"
              onPress={() => props.navigation.navigate("Setting")}
            />
          </View>
        </ImageBackground>
        <View style={styles._user_profile}>
          <Image
            source={require("./../../Assests/portfolio_avatar.png")}
            style={styles._user_pic}
          />
          <Text style={styles._active}></Text>
        </View>
      </View>
      <Text style={styles._user_name}>Daniel William</Text>
      <Text style={styles._type}>Nail Artist</Text>

      <View style={styles._inner_view}>
        <ScrollView>
        {notifications.map((val, i) => {
          return (
            <View style={styles._row} key={i}>
              <Image
                source={require("./../../Assests/reviewsPic1.jpg")}
                style={styles._avatar}
              />
              <View style={styles._body}>
          <Text style={styles._name}>{val.name}</Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Text style={{ color: "rgb(59,59,59)" }}>
                    {val.desc}
                  </Text>
                </View>
              </View>
          <Text style={styles._ago}>{val.ago}</Text>

              <LinearGradient
                colors={["rgb(187,86,232)", "rgb(177,77,221)"]}
                style={styles._view_btn}
              >
                <Text style={styles._view_btn_text}>View</Text>
              </LinearGradient>
            </View>
          );
        })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _header: {
    height: 150,
    marginBottom: 60,
  },
  _sub_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    padding: 10,
  },
  _user_pic: {
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
  _name: {
    color: "rgb(177,77,221)",
    fontWeight: "bold",
  },
  _type: {
    textAlign: "center",
    color: "grey",
    fontWeight: "bold",
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:20
  },
  _avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 5,
  },
  _body: {
    flex: 1,
    justifyContent: "flex-start",
  },
  _ago: {
    color: "grey",
    fontSize: 12,
    marginRight: 20,
  },
  _view_btn: {
    padding: 5,
    borderRadius: 50,
    width: 60,
  },
  _view_btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
  _inner_view: {
    // padding:10,
    margin: 10,
    paddingTop: 20,
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#eae5ea",
  },
});
