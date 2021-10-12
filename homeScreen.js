import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Addingscreen from './screens/addingScreen'


export default class Homescreen extends Component{
    render(){
        return(
            
            <SafeAreaView>
                <SafeAreaProvider>
      
          <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'HomeScreen', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                        width: 900,
                        marginTop:1
                      }}
                    />
                    <AppContainer />
       <TouchableOpacity style = {styles.button}>
           <Text>
               Store 1
           </Text>
       </TouchableOpacity>

       <TouchableOpacity style = {styles.button}>
           <Text>
               Store 2
           </Text>
       </TouchableOpacity>
      </SafeAreaProvider>
      </SafeAreaView>
        )
    }
}
const TabNavigator = createBottomTabNavigator({
    Addingscreen: {screen: Addingscreen},
    Homescreen: {screen: Homescreen},
  },
  );
  
const AppContainer =createAppContainer(TabNavigator)
  
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        backgroundColor:"#0000b0",
        width:100,
        height:40,
        marginBottom:10
    }
  });
  