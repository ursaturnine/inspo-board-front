import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>𓆩♡𓆪Welcome To InspoBoard!꒰ა ♡ ໒꒱</Text>
      <Image
        source={require("../../assets/cats/home_cat.png")}
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E6FA",
  },
  textStyle: {
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
  buttons: {
    backgroundColor: "#7F00FF",
  },
});

export default HomeScreen;
