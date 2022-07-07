import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";

const ViewBoardsScreen = ({}) => {
  const boards = [
    {
      title: "Purple Board",
      owner: "Olivia",
    },
    {
      title: "Pink Board",
      owner: "Natalied",
    },
    {
      title: "Baby Blue Board",
      owner: "Aliyah",
    },
    {
      title: "Sea Green Board",
      owner: "Peyton",
    },
    {
      title: "Lavender Board",
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
          return <Text style={styles.boards}>{item.title}</Text>;
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
