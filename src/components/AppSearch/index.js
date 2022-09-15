import { View, Text, TextInput,Image } from 'react-native';
import React from 'react';
import FontAwesome5Icons from '../AppIcons/FontAwesome5';


const AppSearch = () => {
  return (
    <View style ={{backgroundColor:"white", flexDirection:"row", padding:10, alignItems:"center"}}>
        <View style = {{height:40, width:40, borderRadius:20,backgroundColor:"gray"}}>
          <Image/>
        </View>
        <View style = {{flex:1,borderWidth:1,borderRadius:30,margin:7, height:40,borderColor:"#bbbbbb"}}>
         <TextInput
            placeholder="     What's on your mind"
            color = "black"
            placeholderTextColor="black"
            padding = {10}
         />
        </View>
      <View style={{padding:10}}>
        <FontAwesome5Icons name = "images" size ={21} color="green"/>
      </View>
     
    </View>
  )
}

export default AppSearch