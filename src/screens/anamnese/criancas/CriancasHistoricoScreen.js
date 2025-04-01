import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button, Platform, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import GestacaoNascimento from "../../../components/anamnese/criancas/GestacaoENascimento";
import Alimentacao from "../../../components/anamnese/criancas/Alimentacao";
import SonoEDesenvolvimento from "../../../components/anamnese/criancas/SonoEDesenvolvimento";
import Desempenho from "../../../components/anamnese/criancas/Desempenho";

export default function CriancasHistoricoScreen( {route} ) {
    const { dados } = route.params
    const navigation = useNavigation()

    const [dadosGestacao, setDadosGestacao] = useState({})
    const [dadosAlimentacao, setDadosAlimentacao] = useState({})
    const [dadosSono, setDadosSono] = useState({})
    const [dadosDesempenho, setDadosDesempenho] = useState({})

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    const handleNext =() => {
        const dadosTotais = {
            ...dados,
            ...dadosGestacao,
            ...dadosAlimentacao,
            ...dadosSono, 
            ...dadosDesempenho
        }
        navigation.navigate('Profissionais responsáveis', {dadosTotais})
    }

    return (
        <ScrollView>
            <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
                <Header/>
                <GestacaoNascimento setDados={setDadosGestacao}/>
                <Alimentacao setDados={setDadosAlimentacao}/>
                <SonoEDesenvolvimento setDados={setDadosSono}/>
                <Desempenho setDados={setDadosDesempenho}/>
                <Button title='Próximo' onPress={() => handleNext()}/>    
            </View> 
        </ScrollView>
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
    }
})