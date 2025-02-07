import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from "react";

import monkeyPng from "./assets/monkey.png"

export default function App() {

  // text state
  const[text, setText] = useState("Coconut");

  // event handler
  function changeText(text){
    setText(text);
  }

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 1, backgroundColor: "green" }} />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 50,
    fontWeight: 500,
    color: "green",
  },
  image: {
    height: 500,
    width: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderwidth: 1,
    padding: 10,
  },
});