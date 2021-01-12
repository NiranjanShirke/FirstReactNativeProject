import React, {Component} from 'react'
import { SafeAreaView,TouchableOpacity, StyleSheet, View,Text,TextInput,Image,ImageBackground} from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
import LinearGradient from 'react-native-linear-gradient'

const Welcome = ({ navigation }) => {
    OnLoginClicked=()=>{
        navigation.navigate('Dashboard');    
    }
        return(
                <ImageBackground source={require('./drop_background.png')} style={{resizeMode:'cover',flex:1}}>
                <View style={{flex:0.2,justifyContent:'center'}}>
                <Text style={styles.lableStyle} >Welcome to my First React Native Application</Text>
                </View>

                <View style={{flex:0.6,justifyContent:'center',alignContent:'center',margin:35}}>
                <SegmentedControlTab
                    style={{height:20,width:50}}
                    values={["Login", "Sign Up"]}
                    selectedIndex={0}
                    onPress={index => this.setState({ selected: index })}
                    />
                    
                    <View style={{flexDirection:'column',marginTop:20,justifyContent:'center',
                    alignItems:'center'}}>

                <View style={{flexDirection:'row'}}>

                <TextInput style={styles.textInputStyle} placeholderTextColor='gray' placeholder='Username'></TextInput>
            
                </View>
            
                <View style={{flexDirection:'row'}}>

                <TextInput secureTextEntry={true} placeholderTextColor='gray' style={styles.textInputStyle} placeholder='Password'></TextInput>

                </View>
                </View>


                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer} onPress={OnLoginClicked}>
                    <Text style={{alignSelf:'center',textAlignVertical:'center'}}>LOGIN</Text>
                </TouchableOpacity>


                <Text style={{justifyContent:'flex-end',marginTop:10,flexDirection:'row',
                 fontSize:16,color:'pink', alignSelf:'flex-end'}}>Forgot password?</Text>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{justifyContent:'center',alignItems:'center',marginTop:10,color:'white',
                 fontSize:15}}>Don't have account?</Text>

                <Text style={{justifyContent:'center',alignItems:'center',marginTop:10,color:'#ffffff',
                 fontSize:15}}> Register Now</Text>
                </View>

                </View>
                </ImageBackground>
            
        );
}

const styles=StyleSheet.create({
    titleStyle:{
        justifyContent:'center',
        color:'green',
        fontSize:30
    },
    lableStyle:{
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:20,
    },
    textInputStyle:{
        justifyContent:'flex-start',
        color:'white',
        backgroundColor:'transparent',
        borderColor:'white',
        flex:2,
        fontSize:18,
        margin:10,
        marginTop:20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    appButtonContainer: {
        elevation: 8,
        height:45,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
      },
      RoundedViewContainer: {
        elevation: 8,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop:10,
      },
});

export default Welcome;