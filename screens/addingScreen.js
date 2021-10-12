import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default class Addingscreen extends Component{
    constructor(){
        super();
        this.state = {
            text:'',
            number:0
        }
    }
    render(){
        return(
            <SafeAreaView>
                <SafeAreaProvider>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'BUY ANYTHING', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                        width: 900,
                        marginTop:1
                      }}
                    />
                
                <TextInput
                    style={styles.input}
                    onChangeText={this.state.text}
                    value={this.state.text}
                    placeholder="Enter store name"
                    keyboardType="default"
                    editable={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={this.state.number}
                    value={this.state.number}
                    placeholder="Enter store number"
                    keyboardType="numeric"
                    editable={true}
                />
                <TouchableOpacity style = {styles.button}>
                    <Text>
                        add store
                    </Text>
                </TouchableOpacity>
                </SafeAreaProvider>
            </SafeAreaView>
        )
    }
} 
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        backgroundColor:"#0000b0",
        width:70,
        height:20
    }
  });
  