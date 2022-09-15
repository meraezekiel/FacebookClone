import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import FontAwesome5Icons from '../AppIcons/FontAwesome5';

const AppHeader = () => {
  return (
    <>
        <View style={{flexDirection:"row",padding:5,paddingLeft:10,paddingRight:10, alignItems:"center", justifyContent:"space-between",backgroundColor:"white"}}>
            <View style={styles.facebookcontainer}>
                <Text style ={styles.facebook}>facebook</Text>  
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={styles.icons}>
                   <FontAwesome5Icons  name="plus" size={19} color ="black"/>
                </View>
                <View style={styles.icons}>
                    <FontAwesome5Icons  name="search" size={19} color ="black"/>
                </View>
                <View style={styles.icons}>
                    <FontAwesome5Icons  name="facebook-messenger" size={20} color ="black"/>
                </View>
            </View>
        </View>
    </>
  )
}

export default AppHeader;