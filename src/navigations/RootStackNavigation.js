

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import { enableScreens } from 'react-native-screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppHeader from '../components/AppHeader';
import HomeScreens from '../screens/HomeScreens';
import VideoScreens from '../screens/VideoScreens';
import UserScreens from '../screens/UserScreens';
import NotifScreens from '../screens/NotifScreens';
import BrowserScreens from '../screens/BrowserScreens';
import StoreScreens from '../screens/StoreScreens';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import FonistoIcons from '../components/AppIcons/Fontisto'
import OcticonsIcons from '../components/AppIcons/Octicons'

enableScreens();

const Tab = createMaterialTopTabNavigator();
const RootStackNavigation = () => {
  return (
   <>
    <AppHeader/>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <FonistoIcons 
              name= 'home' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="HomeScreen" 
          component={HomeScreens}
         />
        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <FoundationIcons 
              name= 'monitor' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="VideoScreens" 
          component={VideoScreens} />

        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <FonistoIcons 
              name= 'shopping-store' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="StoreScreens" 
          component={StoreScreens} />
        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <OcticonsIcons 
              name= 'browser' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="BrowserScreens" 
          component={BrowserScreens} />

        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <FonistoIcons 
              name= 'bell' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="NotifScreens" 
          component={NotifScreens} />

        <Tab.Screen 
          options={{ title:({color,focused})=>(
            <FonistoIcons 
              name= 'person' 
              size={25} 
              color={focused ? '#0395FA' : 'gray'}
            />
          )}}
          name="UserScreens" 
          component={UserScreens} />

      </Tab.Navigator>
      </NavigationContainer>
   
   </>
  )
}

export default RootStackNavigation