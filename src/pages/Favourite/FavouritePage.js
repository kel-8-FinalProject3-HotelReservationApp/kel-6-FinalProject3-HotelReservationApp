import React from "react";
import useFavourite from "../../hooks/favourite/favourite.hooks";
import FavouriteCard from "../../components/favouriteCard";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";


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
          <Text>
            Belum ada favourite
          </Text>
        }
      </>
      :
        <View style={{marginTop:'50%'}}>
            <TouchableOpacity onPress={() => handleLogin()}> 
            <Text style={{fontWeight:'700', fontSize:20, color:"#22A39F"}}>Anda belum login, silahkan login terlebih dahulu</Text> 
            </TouchableOpacity>
        </View>
      }
      </ScrollView>
    )
}

export default FavouritePage