import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { fetchSearchHotels } from "../../config/Hotel/HotelSlice";
import DatePicker from 'react-native-modern-datepicker';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";

const SearchView = () => {
    return(
            <View style={[styles.searchContainer, styles.shadowProp]}>
                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                placeholder="Going to...."
                style={styles.TextInput}
                onChangeText={(query) => setQuery(query)}/>
                </View>
                
                <View style={{flexDirection:'row', width:"80%",height: 30,marginTop:10,}}>
                    <View style={[styles.inputRow,styles.shadowProp]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkIn')}>
                        {checkinDate? <Text>{checkinDate}</Text> : <Text> Checkin Date</Text>}
                    </TouchableOpacity>
                    </View>

                    <View style={[styles.inputRow,styles.shadowProp]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkOut')}>
                    {checkoutDate? <Text>{checkoutDate}</Text> : <Text> Checkout Date</Text>}
                    </TouchableOpacity>
                    </View>
                </View>
                

                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                placeholder="Total Guest"
                style={styles.TextInput}
                onChangeText={(guest) => setGuestCount(guest)}/>
                </View>

                <TouchableOpacity style={styles.checkoutButton}onPress={() => searchButton()}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
                
                
            </View>
    )
}


export default SearchView