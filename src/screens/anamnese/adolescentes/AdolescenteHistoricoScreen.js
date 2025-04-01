import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Button, Dimensions, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import GestacaoNascimento from "../../../components/anamnese/adolescentes/GestacaoENascimento";
import Alimentacao from "../../../components/anamnese/adolescentes/Alimentacao";
import SonoEDesenvolvimento from "../../../components/anamnese/adolescentes/SonoEDesenvolvimento";
import SaudeGeral from "../../../components/anamnese/adolescentes/SaudeGeral";
import Habilidades from "../../../components/anamnese/adolescentes/Habilidades";
import DesenvolvimentoSocial from "../../../components/anamnese/adolescentes/DesenvolvimentoSocial";
import HabilidadesMotoras from "../../../components/anamnese/adolescentes/HabilidadesMotoras";

export default function AdolescenteHistoricoScreen( {route} ) {
    const { dados } = route.params
    const navigation = useNavigation()

    const [dadosGestacao, setDadosGestacao] = useState({})
    const [dadosAlimentacao, setDadosAlimentacao] = useState({})
    const [dadosSono, setDadosSono] = useState({})
    const [dadosSaude, setDadosSaude] = useState({})
    const [dadosHabilidades, setDadosHabilidades] = useState({})
    const [dadosDesenvolvimento, setDadosDesenvolvimento] = useState({})
    const [dadosMotoras, setDadosMotoras] = useState({})

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    const handleNext =() => {
        const dadosTotais = {
            ...dados,
            ...dadosGestacao,
            ...dadosAlimentacao,
            ...dadosSono,
            ...dadosSaude,
            ...dadosHabilidades,
            ...dadosDesenvolvimento, 
            ...dadosMotoras
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
                <SaudeGeral setDados={setDadosSaude}/>
                <Habilidades setDados={setDadosHabilidades}/>
                <DesenvolvimentoSocial setDados={setDadosDesenvolvimento}/>
                <HabilidadesMotoras setDados={setDadosMotoras}/>
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