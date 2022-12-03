import React from 'react'
import { Image, ScrollView, View , StyleSheet, ScrollViewBase} from 'react-native'
import { humberger } from '../../../assets'

const TopDestination = () => {
  return (
//    <View style={styles.Scroll}>
      <ScrollView horizontal={true} style ={styles.main} > 
        <View style={styles.Scroll} >
        <Image source={humberger} style={styles.Image}/>
        <Image source={humberger} style={styles.Image}/>
        <Image source={humberger} style={styles.Image}/>
        <Image source={humberger} style={styles.Image}/>
        <Image source={humberger} style={styles.Image}/>
        <Image source={humberger} style={styles.Image}/>
        </View>
      </ScrollView > 
//    </View>
  )
}


const styles = StyleSheet.create({
    main:{
      width: '100%',
      backgroundColor : 'red',
      display:  'flex'
    },
    Scroll : {
        width: '100%',
        display : 'flex',
        flexDirection : "row",
        justifyContent : 'space-between',
        backgroundColor: 'pink'
    },
    Image : {
        height: 100, 
        width: 100,
    }
})
export default TopDestination