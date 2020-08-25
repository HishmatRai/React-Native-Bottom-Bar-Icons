import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function PortFolioTab() {
  let nailartImg = [
    {
      uri: require("./../../Assests/nailart1.png"),
    },
    {
      uri: require("./../../Assests/nailart2.png"),
    },
    {
      uri: require("./../../Assests/nailart3.png"),
    },
    {
      uri: require("./../../Assests/nailart4.png"),
    },

    {
      uri: require("./../../Assests/nailart5.png"),
    },
  ];
  let hairstyleImg = [
    {
      uri: require("./../../Assests/hairstyle1.png"),
    },
    {
      uri: require("./../../Assests/hairstyle2.png"),
    },
    {
      uri: require("./../../Assests/hairstyle3.png"),
    },
    {
      uri: require("./../../Assests/hairstyle4.png"),
    },
    {
      uri: require("./../../Assests/hairstyle5.png"),
    },
  ];
  let eyelashesImg = [
    {
      uri: require("./../../Assests/eyelashes1.png"),
    },
    {
      uri: require("./../../Assests/eyelashes2.png"),
    },
    {
      uri: require("./../../Assests/eyelashes3.png"),
    },
    {
      uri: require("./../../Assests/eyelashes4.png"),
    },
    {
      uri: require("./../../Assests/eyelashes5.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles._heading_row}>
          <Text style={styles._heading}>Nail Art Portfolio</Text>
          <Text style={styles._view_all}>View all</Text>
        </View>
        {/* nail art portfolio */}
        <View style={styles._nail_art_row}>
          {nailartImg.map((val, i) => {
            return <Image source={val.uri} style={styles._nail_Art_img} key={i} />;
          })}
        </View>
        {/* hair style portfolio */}
        <View style={styles._heading_row}>
          <Text style={styles._heading}>Hair Style Portfolio</Text>
          <Text style={styles._view_all}>View all</Text>
        </View>
        <View style={styles._nail_art_row}>
          {hairstyleImg.map((val, i) => {
            return <Image source={val.uri} style={styles._nail_Art_img} key={i} />;
          })}
        </View>

        {/* Eye Lashes portfolio */}
        <View style={styles._heading_row}>
          <Text style={styles._heading}>Eye Lashes Portfolio</Text>
          <Text style={styles._view_all}>View all</Text>
        </View>
        <View style={styles._nail_art_row}>
          {eyelashesImg.map((val, i) => {
            return <Image source={val.uri} style={styles._nail_Art_img} key={i} />;
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles._add_service}>
        <Entypo name="plus" color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  _heading_row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _view_all: {
    color: "rgb(177,77,221)",
    fontWeight: "bold",
    textDecorationLine: "underline",
    paddingBottom: 10,
    paddingTop:10
  },
  _heading: {
    fontWeight: "bold",
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop:10
  },
  _nail_art_row: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  _nail_Art_img: {
    height: 80,
    width: 80,
    margin: 5,
  },
  _add_service: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "rgb(132,37,174)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    elevation: 6,
  },
});
