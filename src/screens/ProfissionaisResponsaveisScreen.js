import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import Header from "../components/Header";

export default function Profissionais( {route} ) {
    const {dados} = route.params
    
    const [anamenseRealizada, setAnamneseRealizada] = useState('')
    const [tecnico, setTecnico] = useState('')

    console.log(dados)
    
    const enviar = () => {
        
    }

    return (
        <View style={styles.container}>
            <Header/>
            <Text>Anamnese realizada com:</Text>
            <TextInput
                style={styles.input}
                value={anamenseRealizada}
                onChangeText={newText=>setAnamneseRealizada(newText)}
            />
            <Text>Técnico:</Text>
            <TextInput
                style={styles.input}
                value={tecnico}
                onChangeText={newText=>setTecnico(newText)}
            />
            <Button title='Enviar dados do paciente' onPress={() => enviar(dados)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})