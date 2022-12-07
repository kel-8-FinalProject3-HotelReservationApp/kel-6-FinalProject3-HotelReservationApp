import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { login } from "../../config/Login/usersSlice";

const LoginPage = ({navigation}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    const users = useSelector((state) => state.persistedReducer.users.users)
    const handleLogin = () => {
        console.log(users, "users ");
        const user = users.find((item) => (item.email === email && item.password === password))
        if(user){
            dispatch(login({user}))
            navigation.navigate('searchResult')
        } else{
            Alert.alert("email atau password salah")
        }        
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}> Login Page </Text>
                <View style={[styles.inputView, styles.shadowProp]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}/>
                </View>
                <View style={[styles.inputView, styles.shadowProp]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}/>
                </View>
                <TouchableOpacity style={styles.loginButton}onPress={() => handleLogin()}>
                    <Text style={{color:"#FFFF", fontWeight: 'bold'}}> Login </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    },
    loginContainer: {
        margin:10,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    loginText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#448f92'
    },
    inputView: {
        backgroundColor: "#FFFF",
        borderRadius: 10,
        paddingHorizontal: 30,
        width: '80%',
        height: 40,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: '0.2',
        shadowRadius: 3,
    },
    TextInput: {
        height: 30,
        flex: 1,
        textAlign:'center',
        width:'100%',
        outlineStyle : 'none',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#448f92'
    },
    loginButton: {
        backgroundColor: '#22A39F',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
        marginTop:20,
        paddingHorizontal: 30,
        width:'80%',
        height:40,
    },
})
export default LoginPage