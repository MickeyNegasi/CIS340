import React from 'react';
import { Text, image, ScrollView, Image } from 'react-native';

const dog = {
  url: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
};

export default MyScrollViewApp() = () =>  (
  
    <ScrollView style= {{padding: 40}}>
      <Text style= {{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontSize: 80}}> Try to scroll down again, if you'd like. </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>
  );


