import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import ServiceCard from "./ServiceCard";
export default function ServiceTab() {
  const serviceArr = [
    {
      uri: require("./../../Assests/service_1.png"),
      title: "Nail Art",
      reting: 4.8,
      price: 50,
    },
    {
      uri: require("./../../Assests/service_2.png"),
      title: "Nail Paint",
      reting: 5.0,
      price: 85,
    },
    {
      uri: require("./../../Assests/service_3.png"),
      title: "Nail Service",
      reting: 4.8,
      price: 50,
    },
    {
      uri: require("./../../Assests/service_4.png"),
      title: "Nail Service",
      reting: 4.8,
      price: 50,
    },
    {
      uri: require("./../../Assests/service_5.png"),
      title: "Nail Art",
      reting: 4.8,
      price: 85,
    },
    {
      uri: require("./../../Assests/service_6.png"),
      title: "Nail Paint",
      reting: 5.0,
      price: 50,
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {serviceArr.map((val, i) => {
            return <ServiceCard data={val} key={i} />;
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles._add_service}>
        <Entypo name="plus" color="white" size={20} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "white",
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
