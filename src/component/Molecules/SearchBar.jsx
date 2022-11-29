import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { calender, Search } from '../../../assets'
import { Input } from '../Atoms'
import DatePicker from 'react-native-modern-datepicker'

const SearchBar = () => {
  const   [date, setDate] =useState('')
  return (
   <View style={styles.container}>
    <View style={styles.wrapper}>
      <Image source={Search} style={styles.image} />
      <Input placeholder={"masukan nilai"} />
    </View>
    <View style={styles.wrapper}>
      <DatePicker onSelectedChange={date => setDate(date)}/>
      {/* <Image source={calender} style={styles.imageCalender} /> */}
      <Input placeholder={"11 agus"} />
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f7f1f1',
  },
  wrapper : {
    width: '100%',
    flexDirection: "row",
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white', 
    borderRadius :10,
    paddingHorizontal: 10,
    marginBottom : 20
  },
  image : {
    width: 25,
    height: 25,
    marginRight: 5,
    color: '#448f92',
    opacity: 0.5
  },
  imageCalender : {
    width: 30,
    height: 30,
    marginRight: 5,
  }
})

export default SearchBar