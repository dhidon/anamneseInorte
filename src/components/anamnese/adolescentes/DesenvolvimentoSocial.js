import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";

export default function DesenvolvimentoSocial( {setDados}) {
    const [dados, setDadosLocal] = useState({
        caracteristicasSociaisSelecionadas: [],
        atividadesFavoritas: '',
        comportamentosSelecionados: [],
        probLimiteSelecionado: '',
        estrategiasUsadas: '',
        independenciaAtivSelecionado: [],
        caracteristicasSociais: [
            {id: 1, label: 'Prefere ficar sozinho', value: 'não'},
            {id: 2, label: 'Excessivamente quieto ou tímido', value: 'não'},
            {id: 3, label: 'Mais interessado em objetos que em pessoas', value: 'não'},
            {id: 4, label: 'Dificuldade em fazer amigos', value: 'não'},
            {id: 5, label: 'Provocado por outras crianças', value: 'não'},
            {id: 6, label: 'Provoca, ameaça, intimida outras crianças', value: 'não'},
            {id: 7, label: 'Prefere fazer trabalho escolar sozinho', value: 'não'},
            {id: 8, label: 'Baixa tolerância a frustração', value: 'não'},
            {id: 9, label: 'Possui rede de contatos virtuais', value: 'não'},
            {id: 10, label: 'Mantem contato com os colegas de sala de aula fora da escola', value: 'não'},
            {id: 11, label: 'Não procurado para estabelecer vínculos de amizade por seus pares', value: 'não'},
            {id: 12, label: 'Dificuldade em ver o ponto de vista de outra pessoa', value: 'não'},
            {id: 13, label: 'Não tem empatia com os outros', value: 'não'},
            {id: 14, label: 'Confia demais nos outros', value: 'não'},
            {id: 15, label: 'Não aprecia o humor', value: 'não'},
        ],
        comportamento: [
            {id: 1, label: 'Teimoso', value: 'não'},
            {id: 2, label: 'Facilmente irritável, bravo, ressentido', value: 'não'},
            {id: 3, label: 'Birras frequentes', value: 'não'},
            {id: 4, label: 'Heteroagressão', value: 'não'},
            {id: 5, label: 'Autoagressão', value: 'não'},
            {id: 6, label: 'Joga ou destrói coisas', value: 'não'},
            {id: 7, label: 'Mente', value: 'não'},
            {id: 8, label: 'Discute com os adultos', value: 'não'},
            {id: 9, label: 'Baixa tolerância a frustração', value: 'não'},
            {id: 10, label: 'Comportamento desafiado', value: 'não'},
            {id: 11, label: 'Foge', value: 'não'},
            {id: 12, label: 'Necessita de muita supervisao', value: 'não'},
            {id: 13, label: 'Impulsivo', value: 'não'},
            {id: 14, label: 'Pouca noção do perigo', value: 'não'},
            {id: 15, label: 'Falta à escola', value: 'não'},
            {id: 16, label: 'Perigoso para consigo mesmo ou com os outros', value: 'não'},
            {id: 17, label: 'Fala sobre se matar', value: 'não'},
            {id: 18, label: 'Medos incomuns, hábitos ou maneirismos', value: 'não'},
            {id: 19, label: 'Parece depressivo', value: 'não'},
            {id: 20, label: 'Chora com frequência', value: 'não'},
            {id: 21, label: 'Excessivamente preocupado e ansioso', value: 'não'},
            {id: 22, label: 'Demasiadamente apegado a certos objetos', value: 'não'},
            {id: 23, label: 'Sexualmente ativo', value: 'não'},
            {id: 24, label: 'Problemas de controle vescal - enurese', value: 'não'},
            {id: 25, label: 'Pouco controle esfincteriano - encoprese', value: 'não'},
            {id: 26, label: 'Tiques motor ou vocal', value: 'não'},
            {id: 27, label: 'Reação exacerbada ao barulho', value: 'não'},
            {id: 28, label: 'Reação exacerbada ao toque', value: 'não'},
            {id: 29, label: 'Sonha acordado excessivamente e fantasia a vida', value: 'não'},
            {id: 30, label: 'Problemas com o olfato e paladar', value: 'não'},
            {id: 31, label: 'Caminha na ponta dos pés', value: 'não'},
            {id: 32, label: 'Fica balançando o corpo', value: 'não'}
        ]
    })

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])
    return (
        <View style={styles.container}>
            <Text>DESENVOLVIMENTO SOCIAL</Text>
            <Text>Marque quais destas características sociais seu filho apresenta?</Text>
            {dados.caracteristicasSociais.map((item, index)=>{
                return <TouchableOpacity key={index} onPress={()=>{
                    const newCaracteristicas = [...dados.caracteristicasSociais]
                    newCaracteristicas[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, caracteristicasSociais: newCaracteristicas})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text>Quais são as atividades favoritas do seu filho?</Text>
            <TextInput
                style={styles.input}
                value={dados.atividadesFavoritas}
                onChangeText={newText=>setDadosLocal({...dados, atividadesFavoritas: newText})}
            />
            <Text style={{fontWeight: 'bold'}}>COMPORTAMENTO</Text>
            <Text>Marque as opções que descrevam comportamentos apresentados pelo seu filho</Text>
            {dados.comportamento.map((item, index)=> {
                return <TouchableOpacity key={index} onPress={()=>{
                    const newComportamento = [...dados.comportamento]
                    newComportamento[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, comportamento: newComportamento})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text>Seu filho tem problemas com limites?</Text>
            <Seletor
                selecionado={dados.probLimiteSelecionado}
                aoMudar={value=>setDadosLocal({...dados, probLimiteSelecionado: value})}
                lista={simOuNao}
            />
            <Text>Quais as estratégias mais bem sucedidades que você usa com seu filho e que dá certo?</Text>
            <TextInput
                style={styles.input}
                value={dados.estrategiasUsadas}
                onChangeText={newText=>setDadosLocal({...dados, estrategiasUsadas: newText})}
            />
            <Text>Consegue ser independente nas atividades de vida diárias?</Text>
            <Seletor
                selecionado={dados.independenciaAtivSelecionado}
                aoMudar={value=>setDadosLocal({...dados, independenciaAtivSelecionado: value})}
                lista={simOuNao}
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
        marginBottom: 10
    }
})