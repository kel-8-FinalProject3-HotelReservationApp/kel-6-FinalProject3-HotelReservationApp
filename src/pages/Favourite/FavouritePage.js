import React from "react";
import useFavourite from "../../hooks/favourite/favourite.hooks";
import FavouriteCard from "../../components/favouriteCard";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import LoginInformation from "../Infomation/LoginInformation";
import IonIcon from 'react-native-vector-icons/Ionicons';



const FavouritePage = ({navigation}) => {
  const {userNow, handleLogin, userFav} = useFavourite({navigation})
    return(
      <ScrollView>
      {Object.keys(userNow).length!==0?
      <>
        {userFav.length!==0 && userFav.hotels.length!==0?
          <>
          {userFav.hotels.map((hotel,idx) => {
            return(
              <FavouriteCard hotel={{hotel}} key={idx}/>
            )
          })}
          </>
        : 
        <View style={styles.container}>
          <Text style={styles.textBelum}>Belum ada Favourite</Text>
          <IonIcon name="heart" size={40} color={'red'}/>
        </View>
        }
      </>
      :
        <LoginInformation handlePress={handleLogin} />
      }
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent : 'center',
    height: 500,
    alignItems : 'center'
  },
  textBelum : {
    fontSize : 20,
    fontWeight : 600
  }
})
export default FavouritePage