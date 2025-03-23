import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from '../components/Header'
import Identificacao from "../components/Identificacao";


export default function AdolescenteIdentificacao() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{margin: 20, gap: 10}}>
                <Header direcionado='Adolescentes'/>
                <Identificacao/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})