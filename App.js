import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BookingPage, BookingHistoryPage, SearchResultPage } from './src/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/config/store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

let persistor = persistStore(store);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ cardStyle: {backgroundColor: 'transparent'}}}>
            <Stack.Screen
            name="searchResult"
            component={SearchResultPage}
              />
            <Stack.Screen
            name="booking"
            component={BookingPage}
            />
            <Stack.Screen
            name="bookingHistory"
            component={BookingHistoryPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
