import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { hottel, humberger, maps } from '../../../assets'

const Navbar = () => {
  return (
    <View style={Styles.container}>
        <Image style={Styles.image} source={humberger}/>
        <Image style={Styles.image} source={hottel}/>
        <Image style={Styles.image} source={maps}/>
    </View>
  )
}

const Styles = StyleSheet.create({
    container : {
        width: '100%', 
        maxHeight: 70,
        backgroundColor : '#448f92',
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    image : {
        height: 30,
        width: 30,
        cursor : 'pointer',
    },
    
})

export default Navbar