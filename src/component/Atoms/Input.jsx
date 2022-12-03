import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({placeholder, onChange, ...rest}) => {
  return (
    <View>
        <TextInput type="date" style={styles.input} placeholder={placeholder} onChange={onChange} {...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderColor: '#448f92',
        borderStyle: 'solid',
        paddingHorizontal : 10,
        outlineStyle: "none",
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#448f92'
}})

export default Input