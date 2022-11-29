import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { addBooking } from "../../config/Booking/BookingSlice";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import useBookingHistory from "../../hooks/booking/history.hooks";
import useBooking from "../../hooks/booking/booking.hooks";

const BookingPage = ({navigation}) => {
    const {handleAddButton, setEmail, setName, setPhoneNumber} = useBooking({navigation})
    return(
        <View style={styles.container}>
            <View>
                <Text style={{marginBottom:10, fontWeight:'500'}}> Contact Information</Text>
                <View style={styles.contactView}>
                    <View style={[styles.inputView,styles.shadowProp]}>
                        <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        onChangeText={(name) => setName(name)}/>
                    </View>

                    <View style={[styles.inputView,styles.shadowProp]}>
                        <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        onChangeText={(email) => setEmail(email)}/>
                    </View>

                    <View style={[styles.inputView,styles.shadowProp]}>
                        <TextInput
                        style={styles.TextInput}
                        placeholder="Phone Number"
                        onChangeText={(number) => setPhoneNumber(number)}/>
                    </View>
                </View>
                
            </View>
            
            <View>
                <Text style={{marginBottom:10, fontWeight:'500'}}> Price Summary</Text>
                <View style={[styles.priceSummaryView,styles.shadowProp]}>
                    <View style={styles.priceSummaryCard}>
                    <Text style={{fontWeight:'500'}}>3 days, 1 Room, 2 Guest</Text>
                    <View style={{flexDirection:'row', marginTop: 10}}>
                        <Text style={{flex:1}}>Total</Text>
                        <Text>$ 534,87 </Text>
                    </View>

                    <View
                    style={styles.underlineSeparator}
                    />

                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1}}>Payable Now</Text>
                        <Text>$ 22,50 </Text>
                    </View>
                    </View>
                    
                    
                </View>
            </View>

            <TouchableOpacity style={styles.checkoutButton} onPress ={() => handleAddButton()}>
                <Text style={styles.btnText}>Checkout</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20
      },
    
    inputView: {
        backgroundColor: "#FFFF",
        borderRadius: 10,
        paddingHorizontal: 30,
        width: '95%',
        height: 30,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: 'center',

      },

    contactView: {
        alignItems:'center',
        alignContent:'center'
    },

    priceSummaryView: {
        backgroundColor:"#FFFF",
        borderRadius: 10,
        overflow:'hidden',
        
    },

    horizontalView: {
        flexDirection:"row",
        
    },

    TextInput: {
        height: 30,
        flex: 1,
        textAlign:'center',
        width:'100%'
    },
    
    checkoutButton: {
        backgroundColor: '#22A39F',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        width:'100%',
        height:30,
        position: 'absolute',
        bottom:0,
        left:0,
    },

    btnText: {
        fontWeight:'500',
        color: '#FFFF'
    },

    priceSummaryCard: {
        margin: 10,
    },

    underlineSeparator:{
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        margin:5,
        marginVertical:10
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default BookingPage