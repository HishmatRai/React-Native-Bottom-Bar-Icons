import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { List, ListItem, Left, Right, Icon, Button } from "native-base";

import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
export default function Setting(props) {
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
      </View>
      <View style={styles._user_profile}>
        <Image
          source={require("./../../Assests/portfolio_avatar.png")}
          style={styles._avatar}
        />
        <TouchableOpacity style={styles._active}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={12}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles._name}>Daniel William</Text>
      <Text style={styles._heading}>Account Settings</Text>
      <View>
        <TouchableOpacity
          style={styles._list}
          onPress={() => props.navigation.navigate("ChangePassword")}
        >
          <Text style={styles._list_text}>Change Email / Password</Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles._list}>
          <Text style={styles._list_text}>Manage Address</Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles._list}>
          <Text style={styles._list_text}>Edit Profile</Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </TouchableOpacity>

        <Text style={styles._heading}>Payment Settings</Text>
        <TouchableOpacity style={styles._list}>
          <Text style={styles._list_text}>Edit Payment Options</Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles._list}>
          <Text style={styles._list_text}>Add Credit Card</Text>
          <Entypo name="chevron-small-right" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles._follow_us}>Follow Us</Text>
      </View>
      <View style={styles._social_view}>
        <View style={styles._td}>
          <MaterialCommunityIcons
            name="facebook"
            size={24}
            color="rgb(177,77,221)"
          />
        </View>

        <View style={styles._td}>
          <MaterialCommunityIcons
            name="instagram"
            size={24}
            color="rgb(177,77,221)"
          />
        </View>
        <View style={styles._td}>
          <MaterialCommunityIcons
            name="twitter"
            size={24}
            color="rgb(177,77,221)"
          />
        </View>
      </View>
      <Button rounded style={styles._logout_btn}>
        <Text style={styles._btn_text}>Log out</Text>
      </Button>
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
    paddingTop: 40,
  },
  _user_profile: {
    alignSelf: "center",
    height: 120,
    width: 120,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  _active: {
    height: 30,
    width: 30,
    backgroundColor: "rgb(177,77,221)",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: -10,
  },
  _avatar: {
    height: 120,
    width: 120,
  },
  _name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  _heading: {
    fontWeight: "bold",
    color: "rgb(177,77,221)",
    fontSize: 18,
    marginTop: 25,
    marginBottom: 5,
  },
  _list: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#dedcde",
    padding: 5,
    paddingTop: 10,
    paddingLeft: 0,
  },
  _list_text: {
    color: "rgb(12,13,52)",
    fontWeight: "bold",
  },
  _follow_us: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "rgb(12,13,52)",
    marginBottom: 20,
  },
  _social_view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  _td: {
    backgroundColor: "rgb(246,246,246)",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  _logout_btn: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "rgb(226,100,158)",
    justifyContent: "center",
    marginTop: 20,
    height: 50,
  },
  _btn_text: {
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
});
