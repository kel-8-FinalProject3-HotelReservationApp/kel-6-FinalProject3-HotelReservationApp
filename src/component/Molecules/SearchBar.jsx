import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { arrowup, calender, guest, Search } from '../../../assets'
import { Input } from '../Atoms'
import { TextInput } from 'react-native'
import { Button } from 'react-native-web'

// import {} from 'rea'

const SearchBar = () => {
  const   [date, setDate] =useState('')
  return (
   <View style={styles.container}>
    <View style={styles.wrapper}>
      <Image source={Search} style={styles.image} />
      <Input placeholder={"Want do you to go?"} />
    </View>
    <View style={styles.wrapper1}>
      <View style={styles.wrapperimage}>
        <Image source={calender} style={styles.image}/>
      <TextInput style={styles.inputDate} placeholder="date"/>
      </View>
      <View style={styles.wrapperimage}>
        <Image source={calender} style={styles.image}/>
      <TextInput style={styles.inputDate} placeholder="date"/>
    </View>
    </View>
    <View style={styles.wrapper}>
      <Image source={guest} style={styles.image}/>
      <Text style={styles.textguest}>Guest</Text>
      <Image source={arrowup} style={styles.image}/>
      <Image source={arrowup} style={styles.image}/>
    </View>
    <Button style={styles.Button} title="Search" />
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
    alignItems: 'center',
    backgroundColor: 'white', 
    borderRadius :10,
    paddingHorizontal: 10,
    marginBottom : 20,
  },
  wrapperimage: {
    backgroundColor: 'white',
    flexDirection : 'row',
    width: '50%',
    marginRight: 20,
    alignItems: 'center',
    paddingHorizontal : 4,
    borderRadius: 10
  },
  inputDate : {
    width : '100%',
    height: 40,
    paddingHorizontal: 10,
    outlineStyle: "none",
    fontSize: 15,
    fontWeight: 'bold',
    color: '#448f92'
  
  },
  wrapper1: {
    flexDirection: 'row',
    paddingRight : 20,
    marginBottom : 20,

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
    backgroundColor : 'white'
  },
  textguest : {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#448f92',
    width: '100%',
    paddingHorizontal: 10
  },
  Button : {
    borderRadius: 100,
  }
})

export default SearchBar