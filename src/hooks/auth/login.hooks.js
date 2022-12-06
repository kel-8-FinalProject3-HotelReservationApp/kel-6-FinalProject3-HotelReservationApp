import { useDispatch } from 'react-redux';
import { logout } from "../../config/Login/usersSlice";
import useSelected from '../selector/selector.hooks';


const useLogin = ({navigation}) => {
    const userNow = useSelected()
    const dispatch = useDispatch()
    const handleLogin = () => {
        navigation.navigate("login")
    }
    const handleLogout = () => { 
        dispatch(logout())
        navigation.navigate('login')
    }
    return {handleLogin, handleLogout, userNow}
}

export default useLogin
