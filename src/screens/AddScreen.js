import React from "react";
import { Text, StyleSheet, View, Image, Button, Pressable } from "react-native";

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
      <Pressable style={styles.buttons}>
        <Text style={styles.buttonTextStyle}>Create Board</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text style={styles.buttonTextStyle}>Create Card</Text>
      </Pressable>
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#7F00FF",
    marginVertical: 10,
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
  buttonTextStyle: {
    fontSize: 30,
    color: "#E6E6FA",
    fontWeight: "bold",
    letterSpacing: 0.25,
    fontFamily: "Avenir-Oblique",
  },
});

export default AddScreen;
