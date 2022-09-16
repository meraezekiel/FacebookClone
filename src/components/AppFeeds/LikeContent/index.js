import { View, Text, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import OcticonsIcons from '../../AppIcons/Octicons';
import FontisoIcons from '../../AppIcons/Fontisto';
import AntDesignIcons from '../../AppIcons/AntDesign';

const LikeContent = () => {
    const [like,setLike] = useState(false);
    const [comment,setComment] = useState(false);
    const [share,setShare] = useState(false);
  return (
    <>
        <View style={{backgroundColor:"white",padding:5,marginTop:10,marginBottom:10}}>
            <View style={{justifyContent:"space-between",flexDirection:'row'}}>
                <View style={{flex:2,flexDirection:"row",alignItems:"center"}}>
                    <OcticonsIcons name="feed-heart" size={15} color="red" />
                    <Text style={{color:'gray'}}>300</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
                    <Text style={{color:'gray'}}>0</Text>
                    <Text style={{color:'gray'}}>Comment</Text>
                    <Text style={{color:'gray'}}>.</Text>
                    <Text style={{color:'gray'}}>0</Text>
                    <Text style={{color:'gray'}}>Shares</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",borderTopWidth:0.5,borderTopColor:"#E4E4E5",padding:10}}>
            <View style ={{flexDirection:"row", justifyContent:"center",alignItems:"center",flex:1}}>
                <AntDesignIcons name = "like1" size ={25} color ={ like ? "#0395FA":"gray" } onPress={()=>setLike(!like)}/>
                <Text style={{color:like ? "#0395FA" :'gray' }}>Like</Text>
            </View>
            <View style ={{flexDirection:"row", justifyContent:"center",alignItems:"center",flex:1}}>
                <OcticonsIcons name = "comment" size ={25}  color ={ comment ? "#0395FA":"gray" } onPress={()=>setComment(!comment)} />
                <Text style={{color:comment ? "#0395FA" :'gray' }}>Comment</Text>
            </View>
            <View style ={{flexDirection:"row", justifyContent:"center",alignItems:"center",flex:1}}>
                <FontisoIcons name = "share-a" size ={25} color ={ share ? "#0395FA":"gray" } onPress={()=>setShare(!share)}/>
                <Text style={{color:share ? "#0395FA" :'gray' }}>Like</Text>
            </View>
        </View>
    </>
  )
}

export default LikeContent;