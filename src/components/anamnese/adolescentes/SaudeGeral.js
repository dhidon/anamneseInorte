import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";

export default function SaudeGeral( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        condicoesSelecionadas:[0],
        fatoresDifSelecionados:[0],
        usoMedicacaoSelecionado: '',
        qualMedicacao: '',
        motivoMedicacao: '',
        quemReceitouMedicacao: '',
        condicoes: [
            { id: 'oites', label: 'Oites', value: 'não' },
            { id: 'sarampo', label: 'Sarampo', value: 'não' },
            { id: 'rubeola', label: 'Rubéola', value: 'não' },
            { id: 'caxumba', label: 'Caxumba', value: 'não' },
            { id: 'catapora', label: 'Catapora', value: 'não' },
            { id: 'coqueluxe', label: 'Coqueluche', value: 'não' },
            { id: 'difteria', label: 'Difteria', value: 'não' },
            { id: 'meningite', label: 'Meningite', value: 'não' },
            { id: 'pneumonia', label: 'Pneumonia', value: 'não' },
            { id: 'encefalite', label: 'Encefalite', value: 'não' },
            { id: 'febreAlta', label: 'Febre alta', value: 'não' },
            { id: 'convulsao', label: 'Convulsão', value: 'não' },
            { id: 'alergia', label: 'Alergia', value: 'não' },
            { id: 'ferimentosCabeca', label: 'Ferimentos na cabeça', value: 'não' },
            { id: 'fraturas', label: 'Fraturas', value: 'não' },
            { id: 'hospitalizacoes', label: 'Hospitalizações', value: 'não' },
            { id: 'cirurgias_Condicoes', label: 'Cirurgias', value: 'não' },
            { id: 'paralisias', label: 'Paralisias', value: 'não' },
            { id: 'perdaConsciencia', label: 'Perda de consciência', value: 'não' },
            { id: 'envenenamento', label: 'Envenenamento', value: 'não' },
            { id: 'dorCabecaSevera', label: 'Dores de cabeça severas', value: 'não' },
            { id: 'febreReumatica', label: 'Febre reumática', value: 'não' },
            { id: 'tuberculose', label: 'Tuberculose', value: 'não' },
            { id: 'doencasOsseas', label: 'Doenças ósseas ou articulares', value: 'não' },
            { id: 'ists', label: 'ISTs', value: 'não' },
            { id: 'anemia', label: 'Anemia', value: 'não' },
            { id: 'ictericia', label: 'Icterícia', value: 'não' },
            { id: 'diabetes', label: 'Diabetes', value: 'não' },
            { id: 'cancer', label: 'Câncer', value: 'não' },
            { id: 'hipertensao', label: 'Hipertensão arterial', value: 'não' },
            { id: 'doencaCardiaca', label: 'Doença cardíaca', value: 'não' },
            { id: 'hemorragia', label: 'Hemorragia', value: 'não' },
            { id: 'eczema', label: 'Eczemas ou picadas', value: 'não' },
            { id: 'abusoFisico', label: 'Abuso físico', value: 'não' },
            { id: 'abusoSexual', label: 'Abuso sexual', value: 'não' },
            { id: 'hepatite', label: 'Hepatite', value: 'não' }
        ],
        fatoresDif: [
            { id: 'doencas', label: 'Doenças', value: 'não' },
            { id: 'mortes', label: 'Mortes', value: 'não' },
            { id: 'cirurgias_Fatores', label: 'Cirurgias', value: 'não' },
            { id: 'acidentes', label: 'Acidentes', value: 'não' },
            { id: 'separacoes', label: 'Separações', value: 'não' },
            { id: 'divorcio', label: 'Divórcio dos pais', value: 'não' },
            { id: 'mudEmpregoPais', label: 'Mudança de emprego dos pais', value: 'não' },
            { id: 'trocaEscola', label: 'Troca de escola', value: 'não' },
            { id: 'mudFamilia', label: 'Mudança da família', value: 'não' },
            { id: 'difFinanceiras', label: 'Dificuldades financeiras', value: 'não' },
            { id: 'novoCasamento', label: 'Novo casamento', value: 'não' },
            { id: 'traumaSexual', label: 'Trauma sexual', value: 'não' },
            { id: 'outrasPerdas', label: 'Outras perdas', value: 'não' },
            { id: 'bullying', label: 'Bullying', value: 'não' },
            { id: 'outroFatorEscola', label: 'Outro fator na escola', value: 'não' },
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