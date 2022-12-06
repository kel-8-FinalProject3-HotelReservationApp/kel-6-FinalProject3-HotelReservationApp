import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchSearchHotels } from "../../config/Hotel/HotelSlice";
import {
    Alert,
} from "react-native";
import { fetchUsers } from "../../config/Login/usersSlice";



const useSearch = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const [guestCount, setGuestCount] = useState('1')
    const [show,setShow] = useState(false)
    const [check, setCheck] = useState('checkIn')
    const [days, setDays] = useState(0)

    
    const currentDate = () => {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today
    }

    const nextDate = () => {
        let next = new Date()
        let dd = String(next.getDate()+1).padStart(2, '0');
        let mm = String(next.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = next.getFullYear();

        next = yyyy + '-' + mm + '-' + dd;
        return next
    }

    const [checkinDate, setCheckinDate] = useState(currentDate())
    const [checkoutDate, setCheckoutDate] = useState(nextDate())

    const getNight = (checkoutDate,checkinDate) => {
        const checkout = new Date(checkoutDate)
        const checkin = new Date(checkinDate)
        let diff = Math.abs(checkout-checkin)
        const days = Math.floor(diff/ (24*60*60*1000))
        if(days){
            setDays(days)
        } else {
            setDays(1)
        }
        
    }

    
    const searchButton = () =>{
        if(query===""){
            Alert.alert('masukan tujuan kamu')
        } else {
            dispatch(fetchSearchHotels({query,  checkinDate, checkoutDate, guestCount}))
        }
        
    }

    const btnCheck = (checkName) => {
        setCheck(checkName)
        setShow(true)
    }

    const changeDate = (check, dateChange) => {
        const date = dateChange.replace(/\/+/g, '-')
        if(check === "checkIn"){
            setCheckinDate(date)
        } else {
            setCheckoutDate(date)
        }
        setShow(false)
    }
    
    useEffect(() => {
        getNight(checkoutDate,checkinDate)
    },[checkoutDate, checkinDate])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return{query, setQuery, guestCount, setGuestCount, 
        show, setShow, check, setCheck, days, setDays, currentDate, nextDate, 
        checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, searchButton, btnCheck, changeDate}
}

export default useSearch