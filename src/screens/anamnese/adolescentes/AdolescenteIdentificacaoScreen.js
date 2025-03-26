import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../../../components/Header'
import Identificacao from '../../../components/anamnese/adolescentes/Identificacao';


export default function AdolescenteIdentificacao() {
    const navigation = useNavigation()
    const [dadosIdentificacao, setDadosIdentificacao] = useState()

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{margin: 20, gap: 10}}>
                <Header direcionado='Adolescentes'/>
                <Identificacao setData={setDadosIdentificacao}/>
                <Button title='Próximo' onPress={() => navigation.navigate('Sintomas - Adolescente', {dadosIdentificacao}) }/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})