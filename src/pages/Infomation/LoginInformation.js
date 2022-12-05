import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-web';


const LoginInformation = ({handlePress}) => {
  return (
      <View style={styles.container}>
        <IonIcon style={styles.icons} name="alert-circle-outline" size={50} color={'red'}/>
        <Text style= {styles.information}>Login Dulu Bro</Text>
        <TouchableOpacity onPress={handlePress}>
            <IonIcon style={styles.icons} name="log-in-outline" size={40} color={'blue'}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        paddingHorizontal : 20,
        marginTop : '50%',
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    information : {
        fontSize : 20,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: '60%'
    },
    icons: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    login : {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        marginHorizontal : '35%',
        borderRadius: 30,
        paddingVertical: 5
    }
})
export default LoginInformation