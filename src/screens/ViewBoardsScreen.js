import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";

const ViewBoardsScreen = ({}) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("127.0.0.1:5000/boards")
      .then((response) => response.json())
      .then((boards) => setBoards(boards));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>✧༺♡༻∞Boards･ﾟ✧*:･ﾟ✧</Text>
      <Image
        source={require("../../assets/cats/reading_cat.png")}
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(board) => board.title}
        data={boards}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.boards}>Title: {item.title}</Text>
              <Text style={styles.boards}>Cards: {item.cards}</Text>
            </View>
          );
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
  textStyles: {
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
  boards: {
    marginVertical: 50,
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
});

export default ViewBoardsScreen;
