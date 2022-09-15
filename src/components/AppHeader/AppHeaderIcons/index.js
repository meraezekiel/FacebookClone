import { View, Text } from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import SimpleLineIconsIcons from '../../AppIcons/SimplelineIcons';
import MaterialIconsIcons from '../../AppIcons/MaterialIcons';
import MaterialCommunityIconsIcons from '../../AppIcons/MCIcons';
import EntypoIcons from '../../AppIcons/Entypo';
import IoniconsIcons from '../../AppIcons/Ionicons';


const AppHeaderIcons = () => {

  return (
    <View style={{paddingTop:5,paddingRight:5,paddingLeft:5, backgroundColor:"white",borderBottomWidth:1,borderBottomColor:"#bbbbbb"}}>
      <View style= {{flexDirection:'row',justifyContent:"space-between"}}>
        <View style ={styles.iconStyles}>
          <SimpleLineIconsIcons name ="home" size ={25} color  = "gray" />
        </View>
        <View style ={styles.iconStyles}>
          <MaterialIconsIcons name ="monitor" size ={28} color  = "gray" />
        </View>
        <View style ={styles.iconStyles}>
          <MaterialCommunityIconsIcons name ="storefront-outline" size ={28} color  = "gray"/>
        </View>
        <View style ={styles.iconStyles}>
          <EntypoIcons name ="browser" size ={25} color  = "gray"/>
        </View>
        <View style ={styles.iconStyles}>
          <IoniconsIcons name ="notifications-outline" size ={25} color  = "gray"/>
        </View>
        <View style ={styles.iconStyles}>
          <SimpleLineIconsIcons name ="user" size ={25} color  = "gray"/>
        </View> 
      </View>
    </View>
  )
}

export default AppHeaderIcons;