import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function Header({direcionado}) {
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 50 }}>
                <Image source={require('../images/logoInorte.png')} style={styles.logo} />
                <Image source={require('../images/logoProjeto.png')} style={styles.logo} />
            </View>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>ANAMNESE PARA AVALIAÇÃO INTERDISCIPLINAR - {direcionado}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    logo: {
        width: 50,
        height: 30
    },
    textoTitulo: {
        fontSize: 16,
        textAlign: 'justify'
    },
    titulo: {
        marginHorizontal: 20
    }
});