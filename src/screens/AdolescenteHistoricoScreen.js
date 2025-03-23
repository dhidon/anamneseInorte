import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../components/Header";
import Historico from "../components/Historico";

export default function AdolescenteHistoricoScreen( {route} ) {
    const { dadosAnteriores } = route.params

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header direcionado='Adolescentes'/>
                <Historico dadosAnteriores={dadosAnteriores}/>
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