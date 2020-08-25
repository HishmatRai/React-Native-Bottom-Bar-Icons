import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AirbnbRating } from "react-native-ratings";

export default function ServiceCard(props) {
  return (
    <View style={styles.container}>
      
      <View style={styles._card}>
        <Image source={props.data.uri} style={styles._service_img} />
        <View style={styles._card_body}>
          <Text style={styles._title}>{props.data.title}</Text>
          <View style={styles._footer}>
            {/* <Text style={styles._review}>Nail Art</Text> */}
            <View style={styles._review_row}>
              <AirbnbRating
                count={1}
                defaultRating={1}
                size={16}
                ratingColor="rgb(254,150,84)"
                ratingBackgroundColor="rgb(153,153,153)"
                showRating={false}
              />
              <Text style={styles._rating_num}>{props.data.reting}</Text>
            </View>
            <Text style={styles._price}>${props.data.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  _card: {
    width: 154,
    marginTop: 10,
    elevation: 5,
    borderRadius: 2,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  _service_img: {
    height: 84,
    width: 154,
  },
  _title: {
    fontWeight: "bold",
    padding: 10,
    paddingBottom: 0,
  },
  _card_body: {
    height: 65,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  _footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _price: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#635DB7",
    padding: 6,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
    width: 65,
  },
  _review_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  _rating_num: {
    color: "grey",
    fontSize: 12,
  },
});
