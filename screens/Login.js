import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import ButtonGradient from '../components/ButtonGradient';
import { useNavigation } from '@react-navigation/native';


function Login () {

  const navigation = useNavigation();

    return(
        <View style={styles.container}>
        <StatusBar style="light" />
        <Image source={require('../assets/usuario.png')} 
        style={{width:90, height:90}}/>

      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subTitulo}>Inicia sesion en tu cuenta</Text>

      <TextInput 
        placeholder='hola@gmail.com'
        style={styles.textInput}>
      </TextInput>
      <TextInput 
        placeholder='contraseña'
        style={styles.textInput}
        secureTextEntry={true}>
      </TextInput>

      <TouchableOpacity
      onPress={() => navigation.navigate('Password')}>
      <Text style={styles.contraseñaOlvidada} >¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <ButtonGradient>
  
      </ButtonGradient>

      <Text style={{color:'gray', marginTop:20}}>¿No tienes una cuenta? 
      <TouchableOpacity
      onPress={() => navigation.navigate('Singup')}>
      <Text style={styles.crearCuenta} >Crear Cuenta</Text>
      </TouchableOpacity>
      </Text>

    </View>

    );
}

export default Login;




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

  contraseñaOlvidada:{
    color:'#4176fc',
    fontSize: 14,
    marginTop: 20,
  },

  button:{

  },

  crearCuenta:{
    color:'#4176fc',
    fontSize: 14,
    marginTop: 20,
  },

});