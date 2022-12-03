import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistReducer } from "redux-persist";
import BookingSlice from "./Booking/BookingSlice";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
  };

const reducer = combineReducers({
    booking: BookingSlice
  });

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: { persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [PERSIST],
        },
      }),
  });
