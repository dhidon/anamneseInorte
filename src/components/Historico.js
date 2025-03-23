import React from "react";
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

    return (
        <View style={{gap: 10}}>
            <GestacaoNascimento/>
            <Alimentacao/>
            <SonoEDesenvolvimento/>
            <SaudeGeral/>
            <Habilidades/>
            <DesenvolvimentoSocial/>
            <HabilidadesMotoras/>
            <Button title='Próximo' onPress={() => navigation.navigate('Profissionais responsáveis')}/>
        </View>
    )
}