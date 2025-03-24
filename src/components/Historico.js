import React, { useState } from "react";
import { View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import GestacaoNascimento from "./GestacaoENascimento";
import Alimentacao from "./Alimentacao";
import SonoEDesenvolvimento from "./SonoEDesenvolvimento";
import SaudeGeral from "./SaudeGeral";
import Habilidades from "./Habilidades";
import DesenvolvimentoSocial from "./DesenvolvimentoSocial";
import HabilidadesMotoras from "./HabilidadesMotoras";

export default function Historico( {dadosAnteriores} ) {
    const navigation = useNavigation()

    const [dadosGestacao, setDadosGestacao] = useState({})
    const [dadosAlimentacao, setDadosAlimentacao] = useState({})
    const [dadosSono, setDadosSono] = useState({})
    const [dadosSaude, setDadosSaude] = useState({})
    const [dadosHabilidades, setDadosHabilidades] = useState({})
    const [dadosDesenvolvimento, setDadosDesenvolvimento] = useState({})
    const [dadosMotoras, setDadosMotoras] = useState({})

    const handleNext = () => {
        const novosDados = {
            ...dadosGestacao,
            ...dadosAlimentacao,
            ...dadosSono,
            ...dadosSaude,
            ...dadosHabilidades,
            ...dadosDesenvolvimento, 
            ...dadosMotoras
        }
        navigation.navigate('Profissionais responsáveis', { dados : {...novosDados, ...dadosAnteriores}})
    }

    return (
        <View style={{gap: 10}}>
            <GestacaoNascimento setDados={setDadosGestacao}/>
            <Alimentacao setDados={setDadosAlimentacao}/>
            <SonoEDesenvolvimento setDados={setDadosSono}/>
            <SaudeGeral setDados={setDadosSaude}/>
            <Habilidades setDados={setDadosHabilidades}/>
            <DesenvolvimentoSocial setDados={setDadosDesenvolvimento}/>
            <HabilidadesMotoras setDados={setDadosMotoras}/>
            <Button title='Próximo' onPress={() => handleNext()}/>
        </View>
    )
}