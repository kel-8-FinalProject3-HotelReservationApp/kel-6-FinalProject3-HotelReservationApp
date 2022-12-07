import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import useLogin from "../../hooks/auth/login.hooks";
import useSettings from "../../hooks/settings/settings.hooks";
import LoginInformation from "../Infomation/LoginInformation";
import IonIcon from 'react-native-vector-icons/Ionicons';



const SettingsPage = ({navigation}) => {
    const {handleLogout, handleLogin} = useLogin({navigation})
    const {onChange, profile} = useSettings({navigation})
    return (
        <View style={styles.mainContainer}>
            {profile.length!==0?
            <View>
                <View style={[styles.myAccountView, styles.shadowProp]}>
                    <View style={{margin:10}}>
                    <Text style={{fontWeight:'600', marginBottom:10, textAlign : 'center'}}>MY ACCOUNT</Text>
                    {profile.map((data, idx) => {
                        return(
                        <>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:0.5}}>
                                <Text style={{fontWeight:'500'}}>{data.title}</Text>
                            </View>
                            <View style={{flex:0.5}}>
                                <TextInput value={data.value} 
                                style={[{textAlign:'left'}, styles.inputText]}
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
                    <Text style={{fontWeight:'600', marginBottom:10, textAlign: 'center'}}>SUPPORT</Text>
                        <Text style={{fontWeight:'500'}}> Terms & Policy</Text>
                        <View
                        style={styles.underlineSeparator}
                        />
                        <TouchableOpacity onPress={() => handleLogout()}> 
                            {/* <Text style={styles.logout}>Logout</Text>  */}
                             <IonIcon style={styles.logout} name="log-in-outline" size={30} color={'red'}/>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            :
            <LoginInformation handlePress={handleLogin} />

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
    inputText: {
        outlineStyle: "none",
        borderColor : 'black',
        // borderBottomWidth: 0.02,
        borderRadius: 10,
        backgroundColor : '#EFF5F5',
        fontSize : 15,
        fontWeight: 500,
        paddingHorizontal: 20,
        padding : 3
    },
    logout :{
        textAlign : 'center',
        fontWeight : 600,
        color: 'red',
        shadowOpacity : 30
    }
})
export default SettingsPage