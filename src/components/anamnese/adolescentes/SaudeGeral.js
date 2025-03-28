import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";

export default function SaudeGeral( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        condicoesSelecionadas:[],
        fatoresDifSelecionados:[],
        usoMedicacaoSelecionado: '',
        qualMedicacao: '',
        motivoMedicacao: '',
        quemReceitouMedicacao: '',
        condicoes: [
            { id: 1, label: 'Oites', value: 'não' },
            { id: 2, label: 'Sarampo', value: 'não' },
            { id: 3, label: 'Rubéola', value: 'não' },
            { id: 4, label: 'Caxumba', value: 'não' },
            { id: 5, label: 'Catapora', value: 'não' },
            { id: 6, label: 'Coqueluche', value: 'não' },
            { id: 7, label: 'Difteria', value: 'não' },
            { id: 8, label: 'Meningite', value: 'não' },
            { id: 9, label: 'Pneumonia', value: 'não' },
            { id: 10, label: 'Encefalite', value: 'não' },
            { id: 11, label: 'Febre alta', value: 'não' },
            { id: 12, label: 'Convulsão', value: 'não' },
            { id: 13, label: 'Alergia', value: 'não' },
            { id: 14, label: 'Ferimentos na cabeça', value: 'não' },
            { id: 15, label: 'Fraturas', value: 'não' },
            { id: 16, label: 'Hospitalizações', value: 'não' },
            { id: 17, label: 'Cirurgias', value: 'não' },
            { id: 18, label: 'Paralisias', value: 'não' },
            { id: 19, label: 'Perda de consciência', value: 'não' },
            { id: 20, label: 'Envenenamento', value: 'não' },
            { id: 21, label: 'Dores de cabeça severas', value: 'não' },
            { id: 22, label: 'Febre reumática', value: 'não' },
            { id: 23, label: 'Tuberculose', value: 'não' },
            { id: 24, label: 'Doenças ósseas ou articulares', value: 'não' },
            { id: 25, label: 'ISTs', value: 'não' },
            { id: 26, label: 'Anemia', value: 'não' },
            { id: 27, label: 'Icterícia', value: 'não' },
            { id: 28, label: 'Diabetes', value: 'não' },
            { id: 29, label: 'Câncer', value: 'não' },
            { id: 30, label: 'Hipertensão arterial', value: 'não' },
            { id: 31, label: 'Doença cardíaca', value: 'não' },
            { id: 32, label: 'Hemorragia', value: 'não' },
            { id: 33, label: 'Eczemas ou picadas', value: 'não' },
            { id: 34, label: 'Abuso físico', value: 'não' },
            { id: 35, label: 'Abuso sexual', value: 'não' },
            { id: 36, label: 'Hepatite', value: 'não' }
        ],
        fatoresDif: [
            { id: 1, label: 'Doenças', value: 'não' },
            { id: 2, label: 'Mortes', value: 'não' },
            { id: 3, label: 'Cirurgias', value: 'não' },
            { id: 4, label: 'Acidentes', value: 'não' },
            { id: 5, label: 'Separações', value: 'não' },
            { id: 6, label: 'Divórcio dos pais', value: 'não' },
            { id: 7, label: 'Mudança de emprego dos pais', value: 'não' },
            { id: 8, label: 'Troca de escola', value: 'não' },
            { id: 9, label: 'Mudança da família', value: 'não' },
            { id: 10, label: 'Dificuldades financeiras', value: 'não' },
            { id: 11, label: 'Novo casamento', value: 'não' },
            { id: 12, label: 'Trauma sexual', value: 'não' },
            { id: 13, label: 'Outras perdas', value: 'não' },
            { id: 14, label: 'Bullying', value: 'não' },
            { id: 15, label: 'Outro fator na escola', value: 'não' },
        ]
    })



    const simOuNao = [
        {label: 'Sim', value: 'sim'},
        {label: 'Não', value: 'não'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])
    return (
        <View style={styles.container}>
            <Text>SAÚDE GERAL</Text>
            <Text>Pressione as condições e doenças que seu filho já teve</Text>
            {dados.condicoes.map((item, index) => {
                return <TouchableOpacity key={index} onPress={()=> {
                    const newCondicoes = [...dados.condicoes]
                    newCondicoes[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, condicoes: newCondicoes})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text style={{fontWeight: 'bold', marginTop: 10}}>ATUALMENTE</Text>
            <Text>Quais fatores você acha que podem contribuir para as dificuldades do seu filho?</Text>
            {dados.fatoresDif.map((item, index)=>{
                return <TouchableOpacity key={index} onPress={()=>{
                    const newFatoresDif = [...dados.fatoresDif]
                    newFatoresDif[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, fatoresDif: newFatoresDif})}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text style={{fontWeight: 'bold', marginTop: 10}}>MEDICAÇÃO</Text>
            <Text>Faz uso de alguma medicação?</Text>
            <Seletor
                selecionado={dados.usoMedicacaoSelecionado}
                lista={simOuNao}
                aoMudar={value=>setDadosLocal({...dados, usoMedicacaoSelecionado: value})}
            />
            {dados.usoMedicacaoSelecionado === 'sim'
            ?<View>
                <TextInput
                    style={styles.input}
                    value={dados.qualMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, qualMedicacao: newText})}
                    placeholder='Qual medicação?'
                />
                <TextInput
                    style={styles.input}
                    value={dados.motivoMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, motivoMedicacao: newText})}
                    placeholder="Qual o motivo do uso dessa medicação?"
                />
                <TextInput
                    style={styles.input}
                    value={dados.quemReceitouMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, quemReceitouMedicacao: newText})}
                    placeholder="Quem receitou esta medicação?"
                />
            </View>
            :null}

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
        marginBottom: 10
    }
})