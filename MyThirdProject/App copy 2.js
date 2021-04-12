import React from 'react';
import {Text, image, View } from 'react-native';

export default function MyDog() {
  let pic= {
    uri: 'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/'
  }
  return (
    <View>
      <Image source= {pic}
      style={{width: 200, height: 200}}
      />
      <Text> Hello, this is my dog</Text>
    </View>
  );
}


