/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import SplashScreen  from './components/Assignment1/Splash';
import Welcome from './components/Assignment1/Welcome'
import { SwitchExample } from './components/switch';
import{MyApp} from './components/progressbar1'
import Dashboard from './components/Assignment1/Dashboard'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, View, Text, Image, TouchableOpacity} from 'react-native';

// export class App extends Component{
// render()
// {
//     return <Welcome/>; 
// }
// }
// export default App;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerRight: () => (
                <TouchableOpacity style={{}}>
                <Text>Button</Text>
                </TouchableOpacity>
            ),
          }}
        /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;