import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AirbnbRating } from "react-native-ratings";

export default function ReviewTab() {
  const reviewList = [
    {
      uri: require("./../../Assests/reviewsPic1.jpg"),
      name: "Julia Chan",
      des:
        "Daniel is very friendly and polite. When I came to her in She made a proper style.",
      ago: "2 hours ago",
      reviews: 5,
    },

    {
      uri: require("./../../Assests/reviewsPic1.jpg"),
      name: "John Smith",
      des:
        "Daniel is very friendly and polite. When I came to her in She made a proper style.",
      ago: "3 days ago",
      reviews: 5,
    },

    {
      uri: require("./../../Assests/reviewsPic1.jpg"),
      name: "Ben James",
      des:
        "Daniel is very friendly and polite. When I came to her in She made a proper style.",
      ago: "3 days ago",
      reviews: 4,
    },

    {
      uri: require("./../../Assests/reviewsPic1.jpg"),
      name: "Julia Chan",
      des:
        "Daniel is very friendly and polite. When I came to her in She made a proper style.",
      ago: "2 days ago",
      reviews: 5,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {reviewList.map((val, i) => {
          return (
            <View style={{ margin: 10, marginBottom: 10 }} key={i}>
              <View style={styles._row}>
                <Image
                  source={require("./../../Assests/reviewsPic1.jpg")}
                  style={styles._avatar}
                />
                <View style={styles._body}>
                  <Text style={styles._name}>{val.name}</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <AirbnbRating
                      count={5}
                      defaultRating={val.reviews}
                      size={16}
                      ratingColor="rgb(254,150,84)"
                      ratingBackgroundColor="rgb(153,153,153)"
                      showRating={false}
                    />
                  </View>
                </View>
                <Text style={styles._ago}>{val.ago}</Text>
              </View>
              <Text style={styles._description}>{val.des}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _timing: {
    color: "grey",
    fontSize: 12,
  },
  _name: {
    fontWeight: "bold",
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _avatar: {
    height: 60,
    width: 60,
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
  },
  _description: {
    fontSize: 14,
    paddingTop: 10,
    paddingRight: 15,
  },
});
