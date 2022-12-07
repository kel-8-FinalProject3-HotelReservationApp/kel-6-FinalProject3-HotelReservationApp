import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchHotels } from "../config/Hotel/HotelSlice";
import DatePicker from "react-native-modern-datepicker";
// import SearchCard from "../../components/searchCard";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { fetchUsers } from "../config/Login/usersSlice";
import SearchCard from "../components/searchCard";
import { Navbar, TopDestination } from "../component";
import {destinationTop, populardestination} from './useHome'
import useSelected from "../hooks/selector/selector.hooks";
import useSearch from "../hooks/search/search.hooks";

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const {searchResult, errorMessage, isLoading} = useSelected()
  const {setQuery, guestCount, setGuestCount, query,
      show, setShow, check, days, currentDate, checkinDate, 
  checkoutDate, btnCheck, changeDate} = useSearch()

  const searchButton = () =>{
      if(query===""){
          Alert.alert('masukan tujuan kamu')
      } else {
          dispatch(fetchSearchHotels({query,  checkinDate, checkoutDate, guestCount}))
          navigation.navigate('searchResultPage')
      }   
  }

  useEffect(() => {
      dispatch(fetchUsers())
      console.log('aa')
  }, [])
  return (
    <ScrollView>
      <Navbar />

      <View style={styles.container}>
        <View style={[styles.searchContainer, styles.shadowProp]}>
          <View style={[styles.inputView, styles.shadowProp]}>
            <TextInput
              placeholder="Going to...."
              style={styles.TextInput}
              onChangeText={(query) => setQuery(query)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              height: 40,
              marginTop: 10,
            }}
          >
            <View style={[styles.inputRow, styles.shadowProp]}>
              <TouchableOpacity onPress={() => btnCheck("checkIn")}>
                {checkinDate ? (
                  <Text style={styles.TextInput}> {checkinDate} </Text>
                ) : (
                  <Text style={styles.TextInput}> Checkin Date</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={[styles.inputRow, styles.shadowProp]}>
              <TouchableOpacity onPress={() => btnCheck("checkOut")}>
                
                {checkoutDate ? (
                  <Text style={styles.TextInput}> {checkoutDate} </Text>
                ) : (
                  <Text style={styles.TextInput}> Checkout Date</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.inputView, styles.shadowProp]}>
            <TextInput
              value={guestCount}
              placeholder="Total Guest"
              style={styles.TextInput}
              onChangeText={(guest) => setGuestCount(guest)}
            />
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => searchButton()}
          >
            <Text style={styles.btnText}> Search </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="none" transparent={true} visible={show}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            
            {check === "checkIn" ? (
              <DatePicker
                onDateChange={(dateString) => changeDate(check, dateString)}
                current={checkinDate}
                selected={checkinDate}
                minimumDate={currentDate()}
                mode="calendar"
              />
            ) : (
              <DatePicker
                onDateChange={(dateString) => changeDate(check, dateString)}
                current={checkoutDate}
                selected={checkoutDate}
                minimumDate={checkinDate}
                mode="calendar"
              />
            )}
          </View>
        </Modal>
        <TopDestination title={'Top destination'} data={destinationTop} />
        <TopDestination title={'Popular destination'} data={populardestination} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  searchContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  inputView: {
    backgroundColor: "#FFFF",
    borderRadius: 10,
    width: "80%",
    height: 40,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  inputRow: {
    backgroundColor: "#FFFF",
    borderRadius: 10,
    height: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 30,
    flex: 1,
    textAlign: "center",
    width: "100%",
    outlineStyle: "none",
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 500,
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  checkoutButton: {
    backgroundColor: "#22A39F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 30,
    width: "80%",
    marginVertical: 20,
    height: 40,
  },

  btnText: {
    fontWeight: "500",
    color: "#FFFF",
  },

  priceView: {
    flex: 0.3,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgView: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: "100%",
    height: 150,
  },

  card: {
    margin: 10,
    height: 200,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    marginBottom: 10,
  },
});

// import React from 'react'
// import { Navbar, SearchBar, TopDestination } from '../component'

// const Home = () => {
//   return (
//     <>
//         <Navbar />
//         <SearchBar />
        
//         <TopDestination/>
//     </>
//   )
// }

// export default Home