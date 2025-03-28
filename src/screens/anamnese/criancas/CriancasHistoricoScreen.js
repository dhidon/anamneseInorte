import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
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
            <View style={styles.container}>
                <Header direcionado='Crianças'/>
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
    container: {
        margin: 20,
        gap: 10
    }
})