import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>A qual grupo pertence o paciente que você está atendendo?</Text>
            <Button title='Adolescente' onPress={()=> navigation.navigate('Identificação - Adolescente')}/>
            <Button title='Criança' onPress={()=> navigation.navigate('Anamnese - Criança')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 5,
        margin: 20
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 20,
        marginBottom: 40
    }
})