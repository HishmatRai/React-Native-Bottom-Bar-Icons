import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { View, Dimensions } from "react-native";

import {
  Signup,
  Appoinment,
  Calender,
  Noftications,
  PosrtFolio,
  Setting,
  ChangePassword,
} from "./../Screens/index";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ArtistTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "rergb(132,37,174)d",
        style: {
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Portfolio"
        component={PosrtFolio}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Entypo
                name="images"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appoinment}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calender}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <FontAwesome
                name="calendar-check-o"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Noftications}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="notifications-none"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Artist"
          component={ArtistTabs}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
