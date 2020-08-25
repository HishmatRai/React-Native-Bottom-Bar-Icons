import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { Tab, Tabs, ScrollableTab } from "native-base";
import { PortfolioTab, ReviewTab, ServiceTab } from "../../Components";
import { AirbnbRating } from "react-native-ratings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

export default function PortFolio(props) {
  return (
    <View style={styles._container}>
      <StatusBar style="light" />
      <View style={styles._header}>
        <ImageBackground
          source={require("./../../Assests/profile_bg.png")}
          style={{ flex: 1 }}
        >
          <View style={styles._sub_header}>
            <FontAwesome name="align-left" size={24} color="white" />
            <MaterialIcons name="settings" size={30} color="white" onPress={()=>props.navigation.navigate("Setting")} />
          </View>
        </ImageBackground>
        <View style={styles._user_profile}>
          <Image
            source={require("./../../Assests/portfolio_avatar.png")}
            style={styles._avatar}
          />
          <Text style={styles._active}></Text>
        </View>
      </View>
      <Text style={styles._user_name}>Daniel William</Text>
      <Text style={styles._type}>Nail Artist</Text>

      <View style={styles._rating_row}>
        <AirbnbRating
          count={5}
          defaultRating={1}
          size={20}
          ratingColor="rgb(254,150,84)"
          ratingBackgroundColor="rgb(153,153,153)"
          showRating={false}
        />
        <Text style={{ color: "grey" }}>(125 reviews)</Text>
      </View>
      <Tabs
        tabBarActiveTextColor="red"
        tabBarUnderlineStyle={{
          backgroundColor: "rgb(177,77,221)",
          height: 3,
        }}
        renderTabBar={() => (
          <ScrollableTab tabsContainerStyle={{ backgroundColor: "#eae8e8" }} />
        )}
      >
        <Tab
          heading="My Services"
          tabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTextStyle={{
            color: "rgb(177,77,221)",
            fontWeight: "bold",
          }}
          textStyle={{
            color: "grey",
            fontWeight: "bold",
          }}
        >
          <ServiceTab />
        </Tab>
        <Tab
          heading="Portfolio"
          tabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTextStyle={{
            color: "rgb(177,77,221)",
            fontWeight: "bold",
          }}
          textStyle={{
            color: "grey",
            fontWeight: "bold",
          }}
        >
          <PortfolioTab />
        </Tab>
        <Tab
          heading="Reviews"
          tabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTabStyle={{
            backgroundColor: "#eae8e8",
          }}
          activeTextStyle={{
            color: "rgb(177,77,221)",
            fontWeight: "bold",
          }}
          textStyle={{
            color: "grey",
            fontWeight: "bold",
          }}
        >
          <ReviewTab />
        </Tab>
      </Tabs>
    </View>
  );
}
