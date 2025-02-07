import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from "react";

import monkeyPng from "./assets/monkey.png"

export default function App() {

  // text state
  const[name, setName] = useState("Coconut");
  const[age, setAge] = useState("40");
  const[isCoffee, setIsCoffee] = useState(false);

  // event handler
  // text handler
  function changeName(text){
    setName(text);
  }
  // number handler
  function changeAge(num){
    setAge(num);
  }

  return (
    <View style={[styles.container]}>

      <View style={[styles.rowContainer]}>
        <Text style={[styles.text]}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder={"Your name"}
          onChangeText={(text) => changeName(text)}
        ></TextInput>
      </View>
      <View style={[styles.rowContainer]}
        
      >
        <Text style={[styles.text]}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          placeholder={"Your name"}
          onChangeText={(num) => changeAge(num)}
        ></TextInput>
      </View>
      <View style={[styles.rowContainer]}
      
      >
        <Text style={[styles.text]}>Name</Text>
        <Text style={[styles.text]}>Name</Text>
      </View>
      <View style={[styles.rowContainer]}
      
      >
        <Text style={[styles.text]}>Name</Text>
        <Text style={[styles.text]}>Name</Text>
      </View>

    <View style={[styles.container]}

    >
      <Text style={[styles.text]}>{name}</Text>
      <Text style={[styles.text]}>{age}</Text>
    </View>

    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    marginRight: "40",
    fontSize: 20,
    fontWeight: 500,
    color: "green",
    borderWidth: 1,
  },
  image: {
    height: 500,
    width: 500,
  },
  input: {
    flex: 3,
    height: 40,
    margin: 12,
    borderWidth: 3,
    borderColor: "",
    padding: 10,
  },
});