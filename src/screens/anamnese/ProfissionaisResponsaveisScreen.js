import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert, Platform, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";

export default function Profissionais( {route} ) {
    const {dadosTotais} = route.params
    const navigation = useNavigation()
    
    const [anamneseRealizada, setAnamneseRealizada] = useState('')
    const [tecnico, setTecnico] = useState('')

    const dadosPaciente = {
        ...dadosTotais,
        anamneseRealizada,
        tecnico
    }

    const larguraTela = Dimensions.get("window").width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    const subirDados = () => {
        if (!anamneseRealizada || !tecnico) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        
        console.log('Dados a serem enviados:', dadosPaciente);
        Alert.alert(
            'Sucesso',
            'Dados enviados com sucesso!',
            [
                {
                    text: 'Voltar para o início',
                    onPress: () => navigation.navigate('Home'),
                    style: 'cancel'
                },
            ],
            { cancelable: true }
        );
    };
    

    return (
        <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
            <Header/>
            <Text>Anamnese realizada com:</Text>
            <TextInput
                style={styles.input}
                value={anamneseRealizada}
                onChangeText={newText=>setAnamneseRealizada(newText)}
            />
            <Text>Técnico:</Text>
            <TextInput
                style={styles.input}
                value={tecnico}
                onChangeText={newText=>setTecnico(newText)}
            />
            <Button title='Enviar dados do paciente' onPress={() => subirDados()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    desktopContainer: {
        marginTop: 10,
        gap: 10,
        padding: 150,
        width: '50%',
        alignSelf: 'center',
    },
    mobileContainer: {
        gap: 10,
        flex: 1,
        margin: 10
    },
    input : {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})