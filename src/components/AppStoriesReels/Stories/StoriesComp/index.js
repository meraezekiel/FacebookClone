import { View, Text, Touchable,Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StoriesComp = ({imgUrl}) => {
  return (

    <TouchableOpacity>
        <Image 
            source ={{uri: imgUrl}}
            style = {{height:200, width:100, borderRadius:10, marginRight:5,resizeMode:"contain"}}
        />
    </TouchableOpacity>
   
  )
}

export default StoriesComp;