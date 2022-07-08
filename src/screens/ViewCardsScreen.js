import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import axios from "axios";

const ViewCardsScreen = ({}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("127.0.0.1:5000/cards")
      .then((response) => response.json())
      .then((cards) => setCards(cards));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>♡*♡∞:｡.｡Top 3 Liked Cards ♡*♡∞:｡.｡</Text>
      <Image
        source={require("../../assets/cats/card_cat.png")}
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(note) => note.message}
        data={cards}
        renderItem={({ item }) => {
          return <Text style={styles.cards}>{item.message}</Text>;
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
  cards: {
    marginVertical: 50,
    fontSize: 30,
    color: "#7F00FF",
    fontWeight: "bold",
    fontFamily: "Avenir-Oblique",
  },
});

export default ViewCardsScreen;
