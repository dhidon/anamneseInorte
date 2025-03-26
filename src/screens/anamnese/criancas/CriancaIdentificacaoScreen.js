import React, { useState } from "react";
import { View, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../../../components/Header'
import Identificacao from '../../../components/anamnese/criancas/Identificacao';


export default function CriancaIdentificacaoScreen() {
    const navigation = useNavigation()
    const [dadosIdentificacao, setDadosIdentificacao] = useState()

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{margin: 20, gap: 10}}>
                <Header direcionado='Crianças'/>
                <Identificacao setData={setDadosIdentificacao}/>
                <Button title='Próximo' onPress={() => navigation.navigate('Sintomas - Crianças', {dadosIdentificacao}) }/>
            </View>
        </ScrollView>
    )
}