import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
const HistoryCard = ({hotel}) => {
    return (
        <View style={[styles.card, styles.shadowProp]}>
            <Image
            style={styles.imgView}
            source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/>
            <View style={styles.cardTextView}>
                <Text style={{fontWeight:'500', fontSize:14,marginBottom: 5}}>{hotel.hotel.namaHotel}</Text>
                <Text style={{fontWeight:'300', fontSize:12,marginBottom: 5}}>{hotel.hotel.alamatHotel}</Text>
                <View style={{flexDirection:'row',alignItems: "center"}}><Stars
                display={hotel.hotel.rating}
                spacing={4}
                count={5}
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                />
                <Text style={{fontWeight:'200'}}> {hotel.hotel.rating}</Text>
                </View> 
            </View>

            <View style={styles.priceView}>
                <Text style={{fontWeight: '500', fontSize:16, color:'#22A39F'}}> $ {hotel.hotel.price} </Text>
                <Text style={{fontWeight: '200', fontSize:10}}> /per night </Text>
            </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        margin: 10,
        height: 100,
        backgroundColor:'#FFFF',
        borderRadius:10,
        marginBottom: 10
    },

    imgView: {
        flex:0.3,
        borderRadius:10,
        margin: 10,
    },

    cardTextView:{
        flex:0.55,
        margin: 10,
        marginTop:10,

    },

    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },

    myEmptyStarStyle: {
        color: 'white',
    },

    priceView:{
        flex:0.25,
        width:'25%',
        justifyContent:'center',
        alignItems: "center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

})

export default HistoryCard;