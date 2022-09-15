import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ReelsComp from './ReelsComp';

const Reels = () => {
  return (
    <View>
     <ScrollView
          contentContainerStyle={{
              paddingHorizontal:2, 
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{padding:10}}>

        <ReelsComp
          imgUrl={"https://cdn.pixabay.com/photo/2016/12/09/09/52/girl-1894125__480.jpg"}
        />
        <ReelsComp 
          imgUrl={"https://cdn.pixabay.com/photo/2013/07/18/10/59/human-skeleton-163715__480.jpg"}
        />
        <ReelsComp 
          imgUrl={"https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847__480.jpg"}
        />
        <ReelsComp 
          imgUrl={"https://cdn.pixabay.com/photo/2017/11/06/23/19/composing-2925179__480.jpg"}
        />
        <ReelsComp 
          imgUrl={"https://cdn.pixabay.com/photo/2018/06/13/20/07/child-3473596__480.jpg"}
        />
        <ReelsComp 
          imgUrl={"https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410__480.jpg"}
        />

        </ScrollView>
    </View>
  )
}

export default Reels;