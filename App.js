import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Homescreen from './screens/homeScreen'

export default class App extends React.Component {
  getaddScreen = () => {
    console.log("get")
    this.props.navigation.navigate('Homescreen');
  }
  render(){
  return (
    <View style={styles.container}>
      <Homescreen/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
