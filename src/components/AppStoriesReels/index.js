import { View, Text } from 'react-native';
import React from 'react';
import Stories from './Stories';
import Reels from './Reels';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
const AppStoriesReels = () => {
  return (
    <>
        <View style ={{height:"100%"}}>
            <Tab.Navigator>
                <Tab.Screen
                    options={{ title:({color,focused})=>(
                       <Text style={{color:focused ? "#0395FA" : "gray"}} >Stories</Text>
                    )}}
                    name="Stories" 
                    component={Stories} />

                <Tab.Screen 
                    options={{ title:({color,focused})=>(
                        <Text style={{color:focused ? "#0395FA" : "gray"}} >Reels</Text>
                    )}} 
                    name="Reels" 
                    component={Reels} />
            </Tab.Navigator>
        </View>
        
    </>
  )
}

export default AppStoriesReels;