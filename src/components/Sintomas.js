import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MultiplaEscolha from "./MultiplaEscolha";

export default function Sintomas( {dadosAnteriores} ) {
    const navigation = useNavigation()

    const [dados, setDados] = useState({
        condicoesSelecionadas: []
    })

    const [motivo, setMotivo] = useState('')
    const [profissionais, setProfissionais] = useState('')
    const [convive, setConvive] = useState('')
    

    const condicoes = [
        {value: 0, label: 'autismo'},
        {value: 1, label: 'déficit de atenção'},
        {value: 2, label: 'convulção ou epilepsia'},
        {value: 3, label: 'hiperatividade'},
        {value: 4, label: 'dificuldades de aprendizagem'},
        {value: 5, label: 'deficiência intelectual'},
        {value: 6, label: 'tiques ou Síndrome de Tourette'},
        {value: 7, label: 'abuso de álcool'},
        {value: 8, label: 'uso de drogas'},
        {value: 9, label: 'tentativa de suicídio'},
        {value: 10, label: 'abuso físico'},
        {value: 11, label: 'problemas comportamentais na infância'},
        {value: 12, label: 'doença mental'},
        {value: 13, label: 'depressão ou ansiedade'},
        {value: 14, label: 'abuso sexual'},
        {value: 15, label: 'doença ou enfermidade neurológica'}
    ]

    const handleNext = () => {
        const dadosSintomas = {
            motivo,
            profissionais,
            convive,
            condicoesSelecionadas: dados.condicoesSelecionadas
        };
        navigation.navigate('Histórico - Adolescente', { dadosIdSintomas: { ...dadosAnteriores, ...dadosSintomas } });
    };

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>2. Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
            <TextInput
                style={styles.input}
                value={motivo}
                onChangeText={newText=>setMotivo(newText)}
            />
            <Text>Que profissionais estão fazendo o acompanhamento?</Text>
            <TextInput
                style={styles.input}
                value={profissionais}
                onChangeText={setProfissionais}
            />
            <Text>Com quem o adolescente passa mais tempo?</Text>
            <TextInput
                style={styles.input}
                value={convive}
                onChangeText={setConvive}
            />
            <MultiplaEscolha
                titulo='Marque as condições ou doenças que algum membro próximo da família (pais, irmãos, tias, tios, primos, avós, etc) já teve. Anote o grau de parentesco com a criança'
                grupo={dados}
                callback={setDados}
                lista={condicoes}
                chave="condicoesSelecionadas"
            />
            <Button title='Próxima' onPress={() => handleNext()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    container: {
        gap: 10,
        flex: 1
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#444",
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: "#4CAF50",
    },
    label: {
        fontSize: 16,
    }
})