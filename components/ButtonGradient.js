import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react'; 
import {client} from '../supabase/supabase.config'

export default function ButtonGradient (){
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {

    try {
     const { error } = await client.auth.signIn({
        email,
      });

      if (error) {
        console.error("Error signing in:", error);
      } else {
        console.log("Check your email for the login link");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

    const navigation = useNavigation();
    return (
        <TouchableOpacity  
            onPress={() => navigation.navigate('Home')}
            style={styles.container}
            onChange={(e) => setEmail(e.target.value)}
            onSubmit={handleSubmit}>
            <LinearGradient 
                colors={['#4B0082', '#4176fc']}
                start={{ x: 0, y: 0}}
                end={{y: 1, x: 1}}
                style={styles.button}>
                <Text style={styles.text}>Iniciar sesion</Text>
            </LinearGradient>    
        </TouchableOpacity>

    )
    
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        alignItems: 'center',
        marginTop: 45
    },

   button:{
    width:'80%',
    height:60,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
   },

   text:{
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
   }
})  