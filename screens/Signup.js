import React from 'react';
import { StatusBar } from 'react-native';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';  
import {client} from '../supabase/supabase.config';



function Signup() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            const { user, error } = await client.auth.signUp({
                email,
            });
            if (error) throw error;
            console.log("Usuario registrado con éxito");
            navigation.navigate('Home');
        } catch (error) {
            console.log("Error al registrar usuario: ", error);
        }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/usuario.png')} 
        style={{width:90, height:90}}/>

      <Text style={styles.titulo}>Registrate</Text>
      <Text style={styles.subTitulo}>Crea una Cuenta</Text>

      <TextInput 
        placeholder='Nombre'
        style={styles.textInput}>
      </TextInput>
      <TextInput 
        placeholder='Apellido'
        style={styles.textInput}>
      </TextInput>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        placeholder='contraseña'
        style={styles.textInput}
        secureTextEntry={true}>
      </TextInput>

      <TouchableOpacity
      onPress={handleSubmit}
      style={styles.button}>
      <Text>Registrarme</Text>
      </TouchableOpacity>



    </View>
    


  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },  

  titulo:{
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  },
  subTitulo:{
    color:'#fff',
    fontSize: 15,
    padding: 10,
  },
  textInput:{
    color:'#fff',
    padding: 10,
    paddingStart : 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#353839'
  },

  button:{
    backgroundColor: '#4176fc',
    marginTop: '10%',
    width:'40%',
    height:50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registro:{
    color:'#4176fc',
    fontSize: 15,
    marginTop: 20,
  }
});
