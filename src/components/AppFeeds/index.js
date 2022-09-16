import { View, Text,Image, TextComponent } from 'react-native';
import React from 'react';
import IoniconsIcons from '../AppIcons/Ionicons'
import MCIcons from '../AppIcons/MCIcons'
import AntDesignIcons from '../AppIcons/AntDesign'
import TextContent from './TextContent';
import ImageContent from './ImageContent';
import LikeContent from './LikeContent';


const AppFeeds = () => {
  return (
    <>
        <View style ={{flexDirection:"row", padding:10}}> 
           <Image
                source={{uri: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.6435-9/143560686_452170362812156_4417179130270697254_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXYnLk_2WBr6JrHrSjbD87nlkyqMYU7BSeWTKoxhTsFMeWHnXh-VV_6GUi2wihZX3WgTIuw8-s8ZCbNKyKhVcQ&_nc_ohc=NziMKu_IFMEAX-LBULR&_nc_ht=scontent.fceb6-1.fna&oh=00_AT-pV_ziOO4mHxG9Ry6sQbDn1FNkytXE1ogeioHx_y85sg&oe=634A7FB5"}}
                style ={{ height:40, width:40, resizeMode:"contain", borderRadius:20}}/>
            <View>
                <Text style ={{color:'black', marginLeft:10,fontSize:15, fontWeight:"bold"}}>John Louie Antoque</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text 
                            style ={{color:'gray', marginLeft:10,fontSize:12}}>Yesterday at 6:40 pm . 
                        </Text>
                        <IoniconsIcons name="settings" size={13} color = "gray"/>
                    </View>
            </View>
            <View style={{flexDirection:"row",position:"absolute", right:1}}>
                <MCIcons name="dots-horizontal" size ={28} color="gray"/>
                <View style={{marginLeft:15,marginRight:5,marginTop:2}}>
                    <AntDesignIcons name="close" size ={25} color="gray"/>
                </View>
            </View>
        </View>

        <View>
            <TextContent
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum."
            />
        </View>
        <View style={{flex:1}}>
            <ImageContent/>
        </View>
        <View>
            <LikeContent/>
        </View>
    </>
  )
}

export default AppFeeds;