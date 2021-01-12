import React, { Component,useEffect } from 'react'
import {StyleSheet,View ,ImageBackground,Image,Text} from 'react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => { navigation.navigate('Welcome') }, 2000)
  });
    return (
        <View>
            <Image style={styles.responsiveImage} source={require('./splashImage.png')}></Image>  
        </View>
    );   
}  

const styles = StyleSheet.create({

    responsiveImage: {
      width: '100%',
      // Without height undefined it won't work
      height: '100%',
      // figure out your image aspect ratio
      //aspectRatio: 135 / 76,
    },
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }
  });


  export default SplashScreen;