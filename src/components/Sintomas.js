import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";


import MultiplaEscolha from "./MultiplaEscolha";

export default function Sintomas( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        condicoesSelecionadas: [],
        motivo: '',
        profissionais: '',
        convive: ''
    }) 

    const condicoes = [
        {value: 'autismo_cg_21', label: 'Autismo'},
        {value: 'defictAtencao_cg_22', label: 'Déficit de atenção'},
        {value: 'convulsaoEpilepsia_cg_23', label: 'Convulsão ou epilepsia'},
        {value: 'hiperatividade_cg_24', label: 'Hiperatividade'},
        {value: 'difAprend_cg_25', label: 'Dificuldades de aprendizagem'},
        {value: 'defIntelectual_cg_26', label: 'Deficiência intelectual'},
        {value: 'tiques_cg_27', label: 'Tiques ou Síndrome de Tourette'},
        {value: 'abusoAlcool_cg_28', label: 'Abuso de álcool'},
        {value: 'usoDrogas_cg_29', label: 'Uso de drogas'},
        {value: 'tentativaSuicidio_cg_30', label: 'Tentativa de suicídio'},
        {value: 'abusoFisico_cg_31', label: 'Abuso físico'},
        {value: 'probCompInfancia_cg_32', label: 'Problemas comportamentais na infância'},
        {value: 'doencaMental_cg_33', label: 'Doença mental'},
        {value: 'depressaoAnsiedade_cg_34', label: 'Depressão ou ansiedade'},
        {value: 'abusoSexual_cg_35', label: 'Abuso sexual'},
        {value: 'doencaNeurologica_cg_36', label: 'Doença ou enfermidade neurológica'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>2. Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
            <TextInput
                style={styles.input}
                value={dados.motivo}
                onChangeText={newText=>setDadosLocal({...dados, motivo: newText})}
            />
            <Text>Que profissionais estão fazendo o acompanhamento?</Text>
            <TextInput
                style={styles.input}
                value={dados.profissionais}
                onChangeText={newText=>setDadosLocal({...dados, profissionais: newText})}
            />
            <Text>Com quem o adolescente passa mais tempo?</Text>
            <TextInput
                style={styles.input}
                value={dados.convive}
                onChangeText={newText=>setDadosLocal({...dados, convive: newText})}
            />
            <MultiplaEscolha
                titulo='Marque as condições ou doenças que algum membro próximo da família (pais, irmãos, tias, tios, primos, avós, etc) já teve. Anote o grau de parentesco com a criança'
                grupo={dados}
                callback={setDadosLocal}
                lista={condicoes}
                chave="condicoesSelecionadas"
            />
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