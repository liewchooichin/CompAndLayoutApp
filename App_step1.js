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
    <ScrollView>
      <Text style={[styles.text]}>Hello App!</Text>
      <StatusBar style="auto" />
      <Image style={[styles.image]} source={monkeyPng} />
      <Image 
        style={[styles.image]}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
        }} />
        <Text style={[styles.text]}>{text}</Text>
        <TextInput
          style={[styles.input]}
          value={text}
          onChangeText={(text) => changeText(text)}
        ></TextInput>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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