import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AddScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> *✿❀Feeling Inspired? ❀✿＊*</Text>
      <Image
        source={require("../../assets/cats/inspired_cat.png")}
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
});

export default AddScreen;
