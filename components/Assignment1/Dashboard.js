import React, { Component } from 'react'
import {StyleSheet,View,TouchableOpacity,ImageBackground,Image,Text} from 'react-native'

const Dashboard = ({ navigation }) => {
    GoBackClicked=()=>{
           navigation.goBack(); 
    }
        return (
            
            <ImageBackground source={require('./dashboard_background.png')} style={{resizeMode:'cover',flex:1}}>
                
            <View style={{flex:1}}>
                
                <View style={{flexDirection:'row',height:'90%'}}>

                <View style={{flexDirection:'row',flex:1,marginTop:50}}>
                <TouchableOpacity
                    activeOpacity={1}>
                    <Text style={styles.tilesStyle}>Proflie</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    activeOpacity={1}>
                    <Text style={styles.tilesStyle}>My Account</Text>
                </TouchableOpacity>
                

                <TouchableOpacity
                    activeOpacity={1}>
                    <Text style={styles.tilesStyle}>My Orders</Text>
                </TouchableOpacity>
                

                <TouchableOpacity
                    activeOpacity={1}>
                    <Text style={styles.tilesStyle}>My Cart</Text>
                </TouchableOpacity>
                
                </View>

                </View>

                <View style={{flexDirection:'row',alignSelf:'flex-end',alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity onPress={GoBackClicked}
                    activeOpacity={0.8}>
                    <Text style={styles.tabItems}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}>
                    <Text style={styles.tabItems}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}>
                    <Text style={styles.tabItems}>Settings</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>

            </ImageBackground>
        );    
}

const styles=StyleSheet.create({
    tabItems:{
        fontSize:20,
        padding:10,
        borderRightWidth:1,
        borderRightColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'white',
        borderWidth:1,
        color:'white'
    },
    tilesStyle:{
        fontSize:20,
        padding:10,
        height:100,
        width:100,
        borderRightWidth:1,
        justifyContent:'center',
        borderRightColor:'gray',
        borderColor:'white',
        backgroundColor:'black',
        borderWidth:2,
        borderRadius:10,
        color:'white'
    },
});

export default Dashboard;
