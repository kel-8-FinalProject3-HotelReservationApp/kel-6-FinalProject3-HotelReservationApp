import React, {  useMemo } from "react";
import useSelected from "../selector/selector.hooks";


const useFavourite = ({navigation}) => {
    const {userNow, allFavourite} = useSelected()
  
    const handleLogin = () => {
      navigation.navigate("login")
    }
    
    const userFav = useMemo(() => {
      if(Object.keys(userNow).length!==0&&allFavourite){
        const hotelsFav = allFavourite.find((favorite) => favorite.id === userNow.id)
        if(hotelsFav){
          return hotelsFav
        } else {
          return []
        }
      }
    },[allFavourite,userNow])

    return{userNow, handleLogin, userFav}
}

export default useFavourite