import React from "react";
import useBookingHistory from "../../hooks/booking/history.hooks";
import HistoryCard from "../../components/historyCard";
import UserInfoDisplay from "../../components/userInfoDisplay";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const BookingHistoryPage = ({navigation}) => {
    const {hotels, userDisplayData, userNow, handleLogin} = useBookingHistory({navigation})
    return(
        <>
        <ScrollView>
            {Object.keys(userNow).length!==0?(
        
        <View style={styles.container}>
        <View>
            <View style={{flexDirection:'row', marginBottom: 10}}>
                <Image
                    style={[styles.imgView, {flex:0.2, height:60}]}
                    source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/>
                <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'500', fontSize:22}}>{userNow.name.firstname} {userNow.name.lastname}</Text>
                    <Text style={{fontWeight:'300', fontSize:10,marginBottom: 5}}>{userNow.email}</Text>
                </View>
            </View>
        </View>

        <View style={styles.underlineSeparator}/>
        <View style={{flexDirection:'row', marginVertical: 5}}>
            {userDisplayData.map((data, idx) => {
                return (
                    <UserInfoDisplay data={data} key={idx}/>
                )
            })}
        </View>
        <View style={styles.underlineSeparator}/>

        <>
        {hotels.length!=0?
        <View>
            {hotels.map((hotel, idx) => {
                return(
                <HistoryCard hotel={hotel} key={idx}/>
                )
            })}
        </View>
        :
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text> Belum ada history booking</Text>
        </View>
        
        }
        </>
        </View>
        
            ):(
                <View style={{marginTop:'50%'}}>
                    <TouchableOpacity onPress={() => handleLogin()}> 
                    <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Anda belum login, silahkan login terlebih dahulu</Text> 
                    </TouchableOpacity>
                </View>

            )}
        
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        backgroundColor:'transparent'
    },

    imgView: {
        flex:0.3,
        borderRadius:10,
        margin: 5,
        marginLeft:20,
    },

    backButton: {
        backgroundColor: '#22A39F',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        width:'100%',
        height:30,
        position: 'absolute',
        bottom:0,

    },


    underlineSeparator:{
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        margin:5,
        marginVertical:10
    },

})
export default BookingHistoryPage;