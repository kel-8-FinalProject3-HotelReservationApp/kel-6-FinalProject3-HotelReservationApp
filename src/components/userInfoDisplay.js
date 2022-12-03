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

const UserInfoDisplay = ({data}) => {

    return(
        <View style={styles.userInfoView}>
            <Text>{data.title}</Text>
            <Text style={styles.userInfoText}>{data.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoView: {
        flex:0.33, 
        justifyContent:'center', 
        alignItems:'center'
    },

    userInfoText: {
        fontWeight: '500', 
        fontSize:16, 
        color:'#22A39F'
    }

    
})

export default UserInfoDisplay;