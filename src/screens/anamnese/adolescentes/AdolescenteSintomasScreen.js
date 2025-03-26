import React, { useState } from "react";
import { View, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import Sintomas from "../../../components/anamnese/adolescentes/Sintomas";

export default function AdolescenteSintomas( {route} ) {
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
                <Header direcionado='Adolescentes'/>
                <Sintomas setDados={setDadosSintomas}/>
                <Button title='Próxima' onPress={() => navigation.navigate('Histórico - Adolescente', {dados})}/>
            </View>
        </ScrollView>
    )
}