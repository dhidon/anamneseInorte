import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Header from "../components/Header";
import Sintomas from "../components/Sintomas";

export default function AdolescenteSintomas() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin: 20, gap: 10}}>
                <Header direcionado='Adolescentes'/>
                <Sintomas/>
            </View>
        </ScrollView>
    )
}