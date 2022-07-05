import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ViewBoardsScreen from "./screens/ViewBoardsScreen";
import ViewCardsScreen from "./screens/ViewCardsScreen";
import AddScreen from "./screens/AddScreen";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#7F00FF",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        ],
        headerStyle: {
          backgroundColor: "#7F00FF",
        },
        headerTintColor: "#E6E6FA",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "Avenir-Oblique",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B6D0E2" : "#E6E6FA",
                }}
              />
              <Text
                style={{ color: focused ? "#B6D0E2" : "#E6E6FA", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="ViewBoards"
        component={ViewBoardsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/clipboard.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B6D0E2" : "#E6E6FA",
                }}
              />
              <Text
                style={{ color: focused ? "#B6D0E2" : "#E6E6FA", fontSize: 12 }}
              >
                Boards
              </Text>
            </View>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="ViewCards"
        component={ViewCardsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/note.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B6D0E2" : "#E6E6FA",
                }}
              />
              <Text
                style={{ color: focused ? "#B6D0E2" : "#E6E6FA", fontSize: 12 }}
              >
                Cards
              </Text>
            </View>
          ),
        }}
      ></BottomTab.Screen>
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Icons/add.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#B6D0E2" : "#E6E6FA",
                }}
              />
              <Text
                style={{ color: focused ? "#B6D0E2" : "#E6E6FA", fontSize: 12 }}
              >
                Add
              </Text>
            </View>
          ),
        }}
      ></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#B6D0E2",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    opacity: 2.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigator;
