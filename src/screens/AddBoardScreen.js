import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-web";
import axios from "axios";

const AddBoardScreen = () => {
  //baseURL
  const baseURL = "127.0.0.1";
  //API Calls
  const [title, setTitle] = useState([]);
  const [owner, setOwner] = useState([]);

  //onSubmit Helper function
  const postBoard = async () => {
    const response = await axios.post(baseURL + "/boards", {
      title: title,
      owner: owner,
    });
    setFormData([response.title, response.owner]);
    console.log("I'm inside the POST API call");
    console.log(title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Create A Board</Text>
      <Text>Enter Title</Text>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={(value) => setTitle(value)}
      />
      <Text>Enter Owner</Text>
      <TextInput
        placeholder="Owner"
        style={styles.input}
        onChangeText={(value) => setTitle(value)}
      />

      {/* <Pressable style={styles.buttons}>
        <Text style={styles.buttonTextStyle} onPress={postBoard}>
          Submit
        </Text>
      </Pressable> */}
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
    marginBottom: 500,
    backgroundColor: "#7F00FF",
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default AddBoardScreen;
