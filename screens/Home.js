import React from 'react';
import { StyleSheet,View, Text } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>


            <Text style={styles.titulo}>Elige lo que quieres ver hoy</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text>Guitarras</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Home;

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
})