import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider  } from 'react-native-safe-area-context';
import React, { useState, useMemo } from "react";
import RadioGroup from 'react-native-radio-buttons-group';

// Images
import catPng from "./assets/cat2.png"


export default function App() {

  // text state
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[label, setButtonLabel] = useState("Submit");
  const[likeCoffee, setLikeCoffee] = useState("null");
  const[testCoffee, setTestCoffee] = useState("test");
  const[isSubmitted, setIsSubmitted] = useState("false");

  // set the radio button
  function initializeRadioButtons(){
    let buttons = [
      {
        id: "1",
        label: "Yes",
        value: "yes",
        selected: "false",
      }, 
      {
        id: "2",
        label: "No",
        value: "no",
        selected: "false",
      }
    ];
    return buttons;
  }
  // no dependency
  const radioButtons = useMemo(()=> (initializeRadioButtons()), []);

  // event handler
  // text handler
  function handleName(name){
    setName(name);
  }
  // number handler
  function handleAge(num){
    setAge(num);
  }
  // choose radio buttons handler
  function handleCoffee(selectedId, value){
    if(selectedId === "1"){
       setLikeCoffee("1");
       setTestCoffee("Like coffee");
    }
    if(selectedId === "2"){
      setLikeCoffee("2");
      setTestCoffee("Don't like coffee");
    }
  }
  // set the button label
  function handleSubmitButton(){
    setButtonLabel("You entered: ");
    setIsSubmitted(true);
  }
  // reset the values
  function handleResetButton(){
    setName("");
    setAge(null);
    setLikeCoffee(null);
    setButtonLabel("Submit");
    setLikeCoffee(null);
    setIsSubmitted(false);
  }

  return (
    <SafeAreaProvider style={[styles.container]}>
      <SafeAreaView style={[styles.container]}>

        <SafeAreaView style={[styles.rowContainer]}>
        <Image
          source={catPng}
          style={[styles.image, styles.bannerImage]}
        ></Image>
        <Text style={[styles.text, styles.bannerText]}>Cat cafe</Text>
        </SafeAreaView>
        
        <SafeAreaView style={[styles.rowContainer]}> 
        <Text style={[styles.text, styles.textForm]}>Nickname</Text>
        <TextInput 
          style={[styles.input]}
          onChangeText={(value) => handleName(value)}
          value={name}
        />
        </SafeAreaView>

        <SafeAreaView style={[styles.rowContainer]}> 
        <Text style={[styles.text, styles.textForm]}>Age</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(value) => handleAge(value)}
          value={age}
          keyboardType="numeric"
        />
        </SafeAreaView>

        <SafeAreaView style={[styles.rowContainer]}>
          <Text style={[styles.text, styles.textForm]}>Like coffee?</Text>
          <RadioGroup
            containerStyle={[styles.radioGroup]}
            labelStyle={[styles.radioLabel]}
            radioButtons={radioButtons}
            onPress={(selectedId, value) => handleCoffee(selectedId, value)}
            selectedId={likeCoffee}
          ></RadioGroup>
        </SafeAreaView>

        <SafeAreaView style={[styles.buttonContainer]}> 
          <Pressable 
            style={[styles.button]} 
            onPress={() => handleSubmitButton()}>
            <Text style={[styles.buttonLabel]}>{label}</Text>
          </Pressable>
        </SafeAreaView>
        
        <SafeAreaView style={[styles.buttonContainer]}> 
          <Pressable 
            style={[styles.button]} 
            onPress={() => handleResetButton()}>
            <Text style={[styles.buttonLabel]}>Reset</Text>
          </Pressable>
        </SafeAreaView>

        {(isSubmitted===true) && (<SafeAreaView style={[styles.responseContainer]}> 
          <Text style={[styles.text]}>{name}</Text>
          <Text style={[styles.text]}>{age}</Text>
          <Text style={[styles.text]}>{testCoffee}</Text>
        </SafeAreaView>)}

      </SafeAreaView>
    </SafeAreaProvider>
  );

}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    //borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "start",
  },
  rowContainer: {
    flexDirection: "row",
    //borderWidth: 1,
    // paddingRight: 3,
    // paddingLeft: 3,
    // paddingTop: 10,
    // paddingBottom: 10,
    justifyContent: "start",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    color: "blue",
    //borderWidth: 1,
  },
  textForm: {
    textAlign: "right",
    paddingRight: 5,
  },
  bannerText: {
    fontSize: 50,
    textAlign: "center",
    //borderWidth: 1,
  },
  image: {
    height: 80,
    width: 80,
  },
  bannerImage: {
    //borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    margin: 3,
    borderWidth: 1,
    borderColor: "gray",
    padding: 3,
  },
  buttonContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
  },
  buttonLabel: {
    color: "white",
    fontSize: 40,
    //borderWidth: 1,
    width: "100%",
    textAlign: "center",    
  },
  radioGroup: {
    layout: "row",
    //borderWidth: 1,
    textAlign: "left",
    width: "100%",
    paddingRight: 10,
  },
  radioLabel: {
    fontSize: 20,
    width: "100%",
  },
  responseContainer: {
    alignItems: "center",
    justifyContent: "start",
    borderWidth: 1,
  }
});