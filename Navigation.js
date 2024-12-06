import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

//screens
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Password from "./screens/Password";
import Home from "./screens/Home";

const LoginNavigator = createStackNavigator();


function MyStacks(){
    return(
        <LoginNavigator.Navigator 
        initialRouteName="Login"
        screenOptions={{
            color: '#000'
        }}>

            <LoginNavigator.Screen 
            name='Login' 
            component={Login}
            options={{
                headerShown: false,
            }}>
            </LoginNavigator.Screen>

            <LoginNavigator.Screen 
            name='Signup' 
            component={Signup}
            options={{
                headerShown: false,
            }}>
            </LoginNavigator.Screen>

            <LoginNavigator.Screen 
            name='Password' 
            component={Password}
            options={{
                headerShown: false,
            }}>
            </LoginNavigator.Screen>

            <LoginNavigator.Screen 
            name='Home' 
            component={Home}>
            </LoginNavigator.Screen>
        </LoginNavigator.Navigator>

    );
    
}


export default function Navegation(){
    return(
        <NavigationContainer>
            <MyStacks></MyStacks>
        </NavigationContainer>
    )
}