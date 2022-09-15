import { View, Text } from 'react-native';
import React from 'react';
import AppSearch from '../../components/AppSearch';
import AppStoriesReels from '../../components/AppStoriesReels';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreens = () => {
  return (
    
      <ScrollView style ={{flex:1}}>
          <AppSearch/>

          <View style={{marginTop:8,height:270}}>
            <AppStoriesReels/>
          </View>

          <View style={{marginTop:10,backgroundColor:"white"}}>
            <Text style={{color:"black"}}>lawas</Text>
          </View>
      </ScrollView>
   
  )
}

export default HomeScreens;