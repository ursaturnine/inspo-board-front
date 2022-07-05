import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>𓆩♡𓆪Welcome To InspoBoard!꒰ა ♡ ໒꒱</Text>
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
