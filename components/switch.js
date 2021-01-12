import React, { Component } from 'react'  
import {StyleSheet, Switch, View, Text, SafeAreaView} from 'react-native'  
  
export  class SwitchExample extends Component {  
    state = {  
        switchValue: false  
    };  
  
    render() {  
        return (  
            <SafeAreaView>
            <View style={styles.container}>  
                <Text style={styles.textStyle}>Switch Example</Text>  
                <Text style={styles.textStyle}>{this.state.switchValue ? 'on' :'off'}</Text>  
                <Switch  
                    value={this.state.switchValue}  
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/>  
            </View>
            </SafeAreaView>
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
        color: 'red'  
    }  
})  