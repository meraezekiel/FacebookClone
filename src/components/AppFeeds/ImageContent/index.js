import { View, Text,Image } from 'react-native';
import React from 'react';

const ImageContent = () => {
  return (
    <>
    <View style={{height:500}}>
       <Image 
          source ={{uri:"https://scontent.fceb6-1.fna.fbcdn.net/v/t1.6435-9/143560686_452170362812156_4417179130270697254_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXYnLk_2WBr6JrHrSjbD87nlkyqMYU7BSeWTKoxhTsFMeWHnXh-VV_6GUi2wihZX3WgTIuw8-s8ZCbNKyKhVcQ&_nc_ohc=NziMKu_IFMEAX-LBULR&_nc_ht=scontent.fceb6-1.fna&oh=00_AT-pV_ziOO4mHxG9Ry6sQbDn1FNkytXE1ogeioHx_y85sg&oe=634A7FB5"}}
          style ={{height:"100%", width:"100%"}}
       />
    </View>
  </>
  )
}

export default ImageContent