
import React from 'react'
import HomeScreens from '../screens/HomeScreens';
import VideoScreens from '../screens/VideoScreens';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { enableScreens } from 'react-native-screens';
enableScreens();


const RootStackNavigation = () => {
  const renderScene = SceneMap({
    first: HomeScreens,
    second: VideoScreens,
  });
  const layout = useWindowDimensions();


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />    
  )
}

export default RootStackNavigation