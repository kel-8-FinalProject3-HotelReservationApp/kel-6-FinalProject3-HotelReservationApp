import React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

const SearchView = () => {
    return(
            <View style={[styles.searchContainer, styles.shadowProp]}>
                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                placeholder="Going to...."
                style={styles.TextInput}
                onChangeText={(query) => setQuery(query)}/>
                </View>
                
                <View style={{flexDirection:'row', width:"80%",height: 30,marginTop:10,}}>
                    <View style={[styles.inputRow,styles.shadowProp]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkIn')}>
                        {checkinDate? <Text>{checkinDate}</Text> : <Text> Checkin Date</Text>}
                    </TouchableOpacity>
                    </View>

                    <View style={[styles.inputRow,styles.shadowProp]}>
                    <TouchableOpacity onPress={()=> btnCheck('checkOut')}>
                    {checkoutDate? <Text>{checkoutDate}</Text> : <Text> Checkout Date</Text>}
                    </TouchableOpacity>
                    </View>
                </View>
                

                <View style={[styles.inputView,styles.shadowProp]}>
                <TextInput
                placeholder="Total Guest"
                style={styles.TextInput}
                onChangeText={(guest) => setGuestCount(guest)}/>
                </View>

                <TouchableOpacity style={styles.checkoutButton}onPress={() => searchButton()}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
                
                
            </View>
    )
}


export default SearchView