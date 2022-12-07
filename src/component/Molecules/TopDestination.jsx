import React from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const TopDestination = ({data, title}) => {
  return (
    <>
    <Text style={styles.TextHeader}>{title}</Text>
    <ScrollView horizontal={true} style={styles.container}>
      {data?.map((item, i)=>{
        return(
          <View style={styles.Wrapper}>
            <Image style={styles.image}  source={item.regionNames.image}/>
            <Text style={styles.Text}>{item.regionNames.secondaryDisplayName}</Text>
          </View>
        )
      })}
    </ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
  },
  Wrapper: {
    marginRight: 10
  },
  image: {
    height: 100,
    width: 100
  },
  Text: {
    textAlign: 'center',
    width: 100
  },
  TextHeader:{
    fontSize : 25,
    fontWeight: 500,
    marginBottom: 10
  }
})
export default TopDestination