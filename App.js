import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/component/Molecules';
import { Home } from './src/pages';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Navbar />
    //   <Text style={styles.text}>manatb jwa</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    // color: 'red',
    // fontSize: 100
  }
});
