import React, { Component } from 'react'  
import {  
    View,WebView,StyleSheet,AppRegistry  
} from 'react-native'  
  
export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
        <View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://www.google.com' }}  
            />  
        </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  
AppRegistry.registerComponent('App', () => ActivityIndicatorDemo)  