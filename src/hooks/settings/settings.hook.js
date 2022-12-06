import {changeProfile} from "../../config/Login/usersSlice";
import { useDispatch} from 'react-redux';
import React, {useMemo } from "react";
import useSelected from "../selector/selector.hooks";

const useSettings = ({navigation}) => {
    const dispatch = useDispatch()
    const {userNow} = useSelected()
    const onChange = (title, input) => {
        dispatch(changeProfile({title,input}))
    }

    const profile = useMemo(() => {
        let infoMazzeh = []
        if(Object.keys(userNow).length!==0){
            infoMazzeh = [
                {
                    title: 'First Name',
                    value: userNow.name.firstname
                },
                {
                    title: 'Last Name',
                    value: userNow.name.lastname
                },
                {
                    title: 'Phone Number',
                    value: userNow.phone
                },
                {
                    title: 'Email',
                    value: userNow.email
                },
            ]
            
        }
        return infoMazzeh
    },[userNow])

    return{onChange, profile}
}

export default useSettings