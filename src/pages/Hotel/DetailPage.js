import React, {useMemo} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import useSelected from "../../hooks/selector/selector.hooks";



const DetailPage = ({route, navigation}) => {
    const hotelInfo = route.params.hotelInfo;
    const days = route.params.days
    const guest = route.params.guest
    const userNow = useSelected()
    const {detail, loadingDetail} = useSelected()
    console.log(guest)
    
    const handleAddButton = () => {
      if(Object.keys(userNow).length!==0){
        navigation.navigate("booking", {
          hotelInfo,
          days,
          guest
        })
      } else {
        navigation.navigate('login')
      }
    }
    
    const about = useMemo(()=> {
      if(Object.keys(detail).length!==0){
        console.log(detail)
        const about2 = detail.propertyContentSectionGroups.aboutThisProperty
        
        return about2.sections[0].bodySubSections[0].elements[0].items[0].content.text
      }
      
    },[detail])
  
    return(
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
          style={styles.imgView}
          source={{uri:hotelInfo.propertyImage.image.url}}>
            <View style={styles.txtView}>
              <Text style={{fontSize:20, color:"#FFFF", fontWeight:"500"}}> {hotelInfo.name}</Text>
            </View>
          
          </ImageBackground>

          {loadingDetail?
          <ActivityIndicator color={'#22A39F'} size={50} style={{alignSelf:'center'}}/>
            
          :
          <View style={styles.detailContainer}>
            <Text style={{fontWeight:'600', marginBottom:10}}>ABOUT</Text>
            <Text style={{marginBottom:10}}>{about}</Text>
          </View>

          
          }
            
          </ScrollView>
        
        
        <TouchableOpacity onPress={() => handleAddButton()} style={styles.addButton}>
                <Text style={{color:'#FFFF'}}>add Booking</Text>
        </TouchableOpacity>
      
      </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },

  imgView: {
    width:'100%',
    height:250
  },

  txtView: {
    position:"absolute",
    bottom:0
  },

  detailContainer: {
    margin: 20
  },

  addButton: {
    backgroundColor: '#22A39F',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 30,
    width:'100%',
    height:30,
    position: 'absolute',
    bottom:10,
},
})
export default DetailPage