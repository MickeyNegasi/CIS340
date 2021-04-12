import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, My name is {props.name}. I am a student in CIS340!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Text>Welcome to CIS340</Text>
      <Student name= "Jon Snow"/>
      <Student name= "Karl Lawson"/>
      <Student name= "Dikembe Mutombo"/>
      <Student name= "Giannis Antetokounmpo"/>
    </View>
  );
}

