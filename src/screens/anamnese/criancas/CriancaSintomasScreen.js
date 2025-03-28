import React, { useState } from "react";
import { View, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import Sintomas from "../../../components/anamnese/criancas/Sintomas";

export default function CriancaSintomasScreen( {route} ) {
    const {dadosIdentificacao} = route.params
    const [dadosSintomas, setDadosSintomas] = useState()
    const navigation = useNavigation()

    const dados = {
        ...dadosIdentificacao,
        ...dadosSintomas
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin: 20, gap: 10}}>
                <Header direcionado='Crianças'/>
                <Sintomas setDados={setDadosSintomas}/>
                <Button title='Próxima' onPress={() => navigation.navigate('Histórico - Crianças', {dados})}/>
            </View>
        </ScrollView>
    )
}