import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ViewBoardsScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>✧༺♡༻∞Boards･ﾟ✧*:･ﾟ✧</Text>
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
  textStyles: {
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
});

export default ViewBoardsScreen;
