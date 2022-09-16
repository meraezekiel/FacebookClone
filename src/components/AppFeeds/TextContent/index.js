import { View, Text } from 'react-native';
import React from 'react';

const TextContent = ({text}) => {
  return (
    <View style={{padding:10}}>
      <Text style ={{color:"black",fontSize:15}}>{text}</Text>
    </View>
  )
}

export default TextContent;