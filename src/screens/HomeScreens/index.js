import { View, Text } from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppHeaderIcons from '../../components/AppHeader/AppHeaderIcons';
import AppSearch from '../../components/AppSearch';

const HomeScreens = () => {
  return (
    <View style ={{flex:1}}>
        <AppHeader/>
        <AppHeaderIcons/>
        <AppSearch/>
    </View>
  )
}

export default HomeScreens;