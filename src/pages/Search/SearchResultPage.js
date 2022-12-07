import React from "react";
import DatePicker from 'react-native-modern-datepicker';
import SearchCard from "../../components/searchCard";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    ActivityIndicator
} from "react-native";
import useSelected from "../../hooks/selector/selector.hooks";
import useSearch from "../../hooks/search/search.hooks";


const SearchResultPage = ({navigation}) => {
    const {searchResult, errorMessage, isLoading} = useSelected()
    const {setQuery, guestCount, setGuestCount, 
        show, setShow, check, days, currentDate, checkinDate, 
        checkoutDate, searchButton, btnCheck, changeDate} = useSearch()
    return(
        
        <ScrollView>
        <View style={styles.container}>
            <View style={[styles.searchContainer, styles.shadowProp]}>
                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                placeholder="Going to...."
                style={styles.TextInput}
                onChangeText={(query) => setQuery(query)}/>
                </View>
                
                <View style={{flexDirection:'row', width:"80%",height: 30,marginTop:10, justifyContent:'space-between'}}>
                    <View style={[styles.inputRow,styles.shadowProp, {width:'48%'}]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkIn')}>
                        {checkinDate? <Text>{checkinDate}</Text> : <Text> Checkin Date</Text>}
                    </TouchableOpacity>
                    </View>

                    <View style={[styles.inputRow,styles.shadowProp, {width:'48%'}]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkOut')}>
                    {checkoutDate? <Text>{checkoutDate}</Text> : <Text> Checkout Date</Text>}
                    </TouchableOpacity>
                    </View>
                </View>
                

                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                value={guestCount}
                placeholder="total guest"
                style={styles.TextInput}
                onChangeText={(guest) => setGuestCount(guest)}/>
                </View>

                <TouchableOpacity style={styles.checkoutButton}onPress={() => searchButton()}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
                
                
            </View>
            <Modal
            animationType="none"
            transparent={true}
            visible={show}
            >
                <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor: 'rgba(0,0,0,0.5)'}} onPress={() => setShow(false)}>
                {check==="checkIn"? (
                    <DatePicker
                    onDateChange={(dateString) => changeDate(check, dateString)}
                    current={checkinDate}
                    selected={checkinDate}
                    minimumDate={currentDate()}
                    mode="calendar"
                    />
                ):(
                    <DatePicker
                    onDateChange={(dateString) => changeDate(check, dateString)}
                    current={checkoutDate}
                    selected={checkoutDate}
                    minimumDate={checkinDate}
                    mode="calendar"
                    />
                )
                }
                
                </TouchableOpacity>
                
            </Modal>
            
            {isLoading? (
                    <ActivityIndicator color={'#22A39F'} size={50} style={{alignSelf:'center'}}/>
            ): (
            <>
            {searchResult.length!==0? (
                <>
                {searchResult.map((hotel, idx) => {
                    return (
                        <SearchCard data={{hotel, guestCount, days}} key ={idx} navigation={navigation} style={[styles.card, styles.shadowProp]}/>
                    )
                })}
                
            </>
            ):(
                    <Text>{errorMessage}</Text>

            )}
            </>
            )}
        </View>
        </ScrollView>
    )
}

export default SearchResultPage

const styles = StyleSheet.create({
    container: {
        margin:20,
    },
    
    searchContainer : {
        backgroundColor:"#F9F9F9",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',

        
    },

    inputView: {
        backgroundColor: "#FFFF",
        borderRadius: 10,
        width: "80%",
        height: 30,
        marginTop:10,
        alignItems: "center",
        justifyContent: 'center',

    },

    inputRow: {
        backgroundColor: "#FFFF",
        borderRadius: 10,
        width: "50%",
        alignItems: "center",
        justifyContent: 'center',
    },

    TextInput: {
        height: 30,
        flex: 1,
        textAlign:'center',
        width:'100%'
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },
    checkoutButton: {
        backgroundColor: '#22A39F',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        width:'80%',
        marginVertical:20,
        height:40,
    },

    btnText: {
        fontWeight:'500',
        color: '#FFFF'
    },

    priceView:{
        flex:0.3,
        width:'25%',
        justifyContent:'center',
        alignItems: "center",
    },
    imgView: {
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        width:'100%',
        height:150
    },

    card: {
        margin: 10,
        height: 200,
        backgroundColor:'#FFFF',
        borderRadius:10,
        marginBottom: 10
    },
})