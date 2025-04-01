import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";

export default function DesenvolvimentoSocial( {setDados}) {
    const [dados, setDadosLocal] = useState({
        caracteristicasSociaisSelecionadas: [0],
        atividadesFavoritas: '',
        comportamentosSelecionados: [0],
        probLimiteSelecionado: '',
        estrategiasUsadas: '',
        independenciaAtivSelecionado: [0],
        caracteristicasSociais: [
            {id: 'prefereSozinho', label: 'Prefere ficar sozinho', value: 'não'},
            {id: 'excQuietoTimido', label: 'Excessivamente quieto ou tímido', value: 'não'},
            {id: 'interesseObjetos', label: 'Mais interessado em objetos que em pessoas', value: 'não'},
            {id: 'difFazerAmigos', label: 'Dificuldade em fazer amigos', value: 'não'},
            {id: 'provocadoPorCriancas', label: 'Provocado por outras crianças', value: 'não'},
            {id: 'provocaCriancas', label: 'Provoca, ameaça, intimida outras crianças', value: 'não'},
            {id: 'prefTrabSozinho', label: 'Prefere fazer trabalho escolar sozinho', value: 'não'},
            {id: 'baixaTolFrustracao_Sociais', label: 'Baixa tolerância a frustração', value: 'não'},
            {id: 'redeContVirtual', label: 'Possui rede de contatos virtuais', value: 'não'},
            {id: 'mantemContatoForaEscola', label: 'Mantem contato com os colegas de sala de aula fora da escola', value: 'não'},
            {id: 'nProcuradoPorPares', label: 'Não procurado para estabelecer vínculos de amizade por seus pares', value: 'não'},
            {id: 'difPontoVistaOutro', label: 'Dificuldade em ver o ponto de vista de outra pessoa', value: 'não'},
            {id: 'semEmpatia', label: 'Não tem empatia com os outros', value: 'não'},
            {id: 'confiaDemais', label: 'Confia demais nos outros', value: 'não'},
            {id: 'naoApreciaHumor', label: 'Não aprecia o humor', value: 'não'},
        ],
        comportamento: [
            {id: 'teimoso', label: 'Teimoso', value: 'não'},
            {id: 'facilmenteIrritado', label: 'Facilmente irritável, bravo, ressentido', value: 'não'},
            {id: 'birrasFrequentes', label: 'Birras frequentes', value: 'não'},
            {id: 'heteroagressao', label: 'Heteroagressão', value: 'não'},
            {id: 'autoagressao', label: 'Autoagressão', value: 'não'},
            {id: 'destroiCoisas', label: 'Joga ou destrói coisas', value: 'não'},
            {id: 'mente', label: 'Mente', value: 'não'},
            {id: 'discuteAdultos', label: 'Discute com os adultos', value: 'não'},
            {id: 'baixaTolFrustracao_comportamento', label: 'Baixa tolerância a frustração', value: 'não'},
            {id: 'desafiador', label: 'Comportamento desafiador', value: 'não'},
            {id: 'foge', label: 'Foge', value: 'não'},
            {id: 'necessitaSupervisao', label: 'Necessita de muita supervisao', value: 'não'},
            {id: 'impulsivo', label: 'Impulsivo', value: 'não'},
            {id: 'poucaNocaoPerigo', label: 'Pouca noção do perigo', value: 'não'},
            {id: 'faltaAEscola', label: 'Falta à escola', value: 'não'},
            {id: 'perigoso', label: 'Perigoso para consigo mesmo ou com os outros', value: 'não'},
            {id: 'falasSuicidas', label: 'Fala sobre se matar', value: 'não'},
            {id: 'medosIncomuns', label: 'Medos incomuns, hábitos ou maneirismos', value: 'não'},
            {id: 'pareceDepressivo', label: 'Parece depressivo', value: 'não'},
            {id: 'choraComFrequencia', label: 'Chora com frequência', value: 'não'},
            {id: 'excesAnsioso', label: 'Excessivamente preocupado e ansioso', value: 'não'},
            {id: 'apegadoObjetos', label: 'Demasiadamente apegado a certos objetos', value: 'não'},
            {id: 'sexualmenteAtivo', label: 'Sexualmente ativo', value: 'não'},
            {id: 'enurese', label: 'Problemas de controle vescal - enurese', value: 'não'},
            {id: 'encoprese', label: 'Pouco controle esfincteriano - encoprese', value: 'não'},
            {id: 'tiques', label: 'Tiques motor ou vocal', value: 'não'},
            {id: 'reacaoExacerbBarulho', label: 'Reação exacerbada ao barulho', value: 'não'},
            {id: 'reacaoExacerbToque', label: 'Reação exacerbada ao toque', value: 'não'},
            {id: 'sonhaFantasia', label: 'Sonha acordado excessivamente e fantasia a vida', value: 'não'},
            {id: 'probOlfatoPaladar', label: 'Problemas com o olfato e paladar', value: 'não'},
            {id: 'caminhaPontaPes', label: 'Caminha na ponta dos pés', value: 'não'},
            {id: 'balancaCorpo', label: 'Fica balançando o corpo', value: 'não'}
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