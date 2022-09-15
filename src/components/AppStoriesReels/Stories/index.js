import { View, Text, ScrollView,Image } from 'react-native';
import React from 'react';
import StoriesComp from './StoriesComp';

const Stories = () => {
  return (
    <View>
       <ScrollView
          contentContainerStyle={{
              paddingHorizontal:2, 
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{padding:10,backgroundColor:"white"}}>

        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__480.jpg"}
        />
        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2015/06/01/09/05/facebook-793048__480.jpg"}
        />
        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__480.jpg"}
        />
        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2017/08/12/09/17/industry-2633878__480.jpg"}
        />
        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2016/03/15/17/17/sexy-1258739__480.jpg"}
        />
        <StoriesComp 
          imgUrl={"https://cdn.pixabay.com/photo/2017/08/06/07/19/people-2589818__480.jpg"}
        />

        </ScrollView>
    </View>
  )
}

export default Stories;