import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";

const ViewBoardsScreen = ({}) => {
  const boards = [
    {
      title: "Purple Board",
      cards: 5,
      owner: "Olivia",
    },
    {
      title: "Pink Board",
      cards: 4,
      owner: "Natalie",
    },
    {
      title: "Baby Blue Board",
      cards: 10,
      owner: "Aliyah",
    },
    {
      title: "Sea Green Board",
      cards: 4,
      owner: "Peyton",
    },
    {
      title: "Lavender Board",
      cards: 5,
      owner: "Vanessa",
    },
  ];

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
