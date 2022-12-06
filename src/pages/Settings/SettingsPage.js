import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import useLogin from "../../hooks/auth/login.hooks";
import useSettings from "../../hooks/settings/settings.hook";


const SettingsPage = ({navigation}) => {
    const {handleLogout, handleLogin} = useLogin({navigation})
    const {onChange, profile} = useSettings({navigation})
    console.log(profile)
    return (
        <View style={styles.mainContainer}>
            {profile.length!==0?
            <View>
                <View style={[styles.myAccountView, styles.shadowProp]}>
                    <View style={{margin:10}}>
                    <Text style={{fontWeight:'600', marginBottom:10}}>MY ACCOUNT</Text>
                    {profile.map((data, idx) => {
                        return(
                        <>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:0.5}}>
                                <Text style={{fontWeight:'500'}}>{data.title}</Text>
                            </View>
                            <View style={{flex:0.5}}>
                                <TextInput value={data.value} 
                                style={{textAlign:'right'}}
                                onChangeText={(e) => 
                                    {if(data.title==='First Name'){onChange('firstname',e)}
                                    else if(data.title==='Last Name'){onChange('lastname',e)}
                                    else if(data.title==='Phone Number'){onChange('phone',e)}
                                    else {onChange('email',e)}
                                    }}/>
                            </View>
                        </View>
                        {idx+1 !== profile.length?
                        <View
                        style={styles.underlineSeparator}
                        />
                        :
                        <></>}
                        </>
                        )
                    })}
                    </View>
                </View>
            
                <View style={[styles.myAccountView, styles.shadowProp]}>
                    <View style={{margin:10}}>
                    <Text style={{fontWeight:'600', marginBottom:10}}>SUPPORT</Text>
                        <Text style={{fontWeight:'500'}}> Terms & Policy</Text>
                        <View
                        style={styles.underlineSeparator}
                        />
                        <TouchableOpacity onPress={() => handleLogout()}> 
                            <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Logout</Text> 
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            :
            <View style={[styles.myAccountView, styles.shadowProp]}>
                <View style={{margin:10}}>
                <Text style={{fontWeight:'500', marginBottom:10}}>SUPPORT</Text>
                    <Text style={{fontWeight:'500'}}> Terms & Policy</Text>
                        <View
                        style={styles.underlineSeparator}
                        />
                    <TouchableOpacity onPress={() => handleLogin()}> 
                        <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Login</Text> 
                    </TouchableOpacity>
                </View>
            </View>

            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        margin:20
    },

    underlineSeparator:{
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        margin:5,
        marginVertical: 10
    },

    myAccountView: {
        backgroundColor:"#FFFF",
        borderRadius: 10,
        marginBottom: 20
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },
})
export default SettingsPage