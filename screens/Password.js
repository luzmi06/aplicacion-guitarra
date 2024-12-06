import React from 'react';
import { StyleSheet,View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

function Password() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/contrasena.png')} 
        style={{width:100, height:100}}/>
      <Text style={styles.titulo}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.subTitulo}>Ingresa tu mail y te llegara un codigo de recuperacion</Text>

      <TextInput 
        placeholder='hola@gmail.com'
        style={styles.textInput}>
      </TextInput>

      <TouchableOpacity 
        style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
   


    </View>
    
  );
}

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },  

  titulo:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20
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
    width:'30%',
    height:50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }

})