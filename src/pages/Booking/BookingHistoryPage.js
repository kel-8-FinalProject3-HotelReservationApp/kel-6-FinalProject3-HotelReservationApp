import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import useBookingHistory from "../../hooks/booking/history.hooks";
import HistoryCard from "../../components/historyCard";
import UserInfoDisplay from "../../components/userInfoDisplay";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../config/Login/usersSlice";
import LoginInformation from "../Infomation/LoginInformation";

const BookingHistoryPage = ({navigation}) => {
    const dispatch = useDispatch()
    const {hotels, userDisplayData, userNow, handleLogin} = useBookingHistory({navigation})
    const handleLogout = () => { 
        dispatch(logout())
        navigation.navigate('login')
    }
    console.log(hotels)
    return(
        <>
        <ScrollView>
            {Object.keys(userNow).length!==0?(
        
        <View style={styles.container}>
        <View>
            <View style={{flexDirection:'row', marginBottom: 10}}>
                <Image
                    style={[styles.imgView]}
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077063.png'}}/>
                <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'500', fontSize:22, textTransform : 'uppercase'}}>{userNow.name.firstname} {userNow.name.lastname}</Text>
                    <Text style={{fontWeight:'500', fontSize:14,marginBottom: 5}}>{userNow.email}</Text>
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
        {hotels?
        <View>
            {hotels.map((hotel, idx) => {
                console.log(hotel)
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
                <LoginInformation handlePress={handleLogin} />
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
        height: '100%',
        paddingHorizontal  : 20,
        marginLeft: 30
        
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