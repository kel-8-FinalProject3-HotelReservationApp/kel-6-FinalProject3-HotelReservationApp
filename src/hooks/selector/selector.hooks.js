import { useSelector } from 'react-redux';


const useSelected = () => {
    const searchResult = useSelector((state) => state.persistedReducer.hotel.searchResults)
    const errorMessage = useSelector((state) => state.persistedReducer.hotel.errorMessage)
    const isLoading = useSelector((state) => state.persistedReducer.hotel.isLoading)
    const userNow = useSelector((state) => state.persistedReducer.users.userLoggedIn)
    const allFavourite = useSelector((state) => state.persistedReducer.favourite.usersFavourite)
    const detail = useSelector((state) => state.persistedReducer.hotel.currentHotel)
    const loadingDetail = useSelector((state) => state.persistedReducer.hotel.loadingDetail)

    return{searchResult, errorMessage, isLoading, userNow, allFavourite, detail, loadingDetail}
}

export default useSelected