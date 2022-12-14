// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { BookingPage, BookingHistoryPage, SearchResultPage, Home } from './src/pages';
// import {  StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-web";
import { BookingPage, BookingHistoryPage, SearchResultPage, DetailPage, HomePage, LoginPage, FavouritePage, SettingsPage, Home } from './src/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/config/store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

let persistor = persistStore(store);
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator 
          initialRouteName="searchResult"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;

              if (rn === 'searchResult') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === 'bookingHistory') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (rn === 'fav') {
                iconName = focused ? 'heart-sharp' : 'heart-outline';
              } else if (rn === 'settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (rn === 'searchResultPage') {
                iconName = focused ? 'search-sharp' : 'search-outline';
              }
              return <IonIcon name={iconName} size={size} color={color}></IonIcon>
            },
            tabBarActiveTintColor: "#22A39F",
          })}
          
          
          >
            <Tab.Screen
            options={{
              title:'Home'
            }}
            name="searchResult"
            component={Home}
              />
            <Tab.Screen
            options={{
              title:'Search'
            }}
            name="searchResultPage"
            component={SearchResultPage}
            />
            <Tab.Screen
            options={{
              title:'Favourite',
            }}
            name="fav"
            component={FavouritePage}
              />
            <Tab.Screen
            options={{
              tabBarVisible:false,
              tabBarButton: (props) => null,
            }}
            name="booking"
            component={BookingPage}
            />
            
            <Tab.Screen
            options={{
              title:'Profile'
            }}
            name="bookingHistory"
            component={BookingHistoryPage}
            />
            <Tab.Screen
            options={{
              title:'Settings'
            }}
            name="settings"
            component={SettingsPage}
            />
            <Tab.Screen
            options={{
              tabBarVisible:false,
              tabBarButton: (props) => null,
            }}
            name="detail"
            component={DetailPage}
            />
            <Tab.Screen
            options={{
              title:'Login',
              tabBarVisible:false,
              tabBarButton: (props) => null,
            }}
            name="login"
            component={LoginPage}
              />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
