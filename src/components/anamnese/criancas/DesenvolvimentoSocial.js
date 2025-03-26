import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Seletor from "../../Seletor";
import MultiplaEscolha from "../../MultiplaEscolha";

export default function DesenvolvimentoSocial( {setDados}) {
    const [dados, setDadosLocal] = useState({
        caracteristicasSociaisSelecionadas: [],
        atividadesFavoritas: '',
        comportamentosSelecionados: [],
        probLimiteSelecionado: '',
        estrategiasUsadas: '',
        independenciaAtivSelecionado: []
    })

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]
        
    const caracteristicasSociais = [
        {label: 'Prefere ficar sozinho', value: 'ficarSozinho'},
        {label: 'Excessivamente quieto ou tímido', value: 'quietoTimido'},
        {label: 'Mais interessado em objetos que em pessoas', value: 'interesseObjetos'},
        {label: 'Dificuldade em fazer amigos', value: 'difFazerAmigos'},
        {label: 'Provocado por outras crianças', value: 'provocadoCriancas'},
        {label: 'Provoca, ameaça, intimida outras crianças', value: 'provocaCriancas'},
        {label: 'Prefere fazer trabalho escolar sozinho', value: 'trabalhoSozinho'},
        {label: 'Baixa tolerância a frustração', value: 'baixaTolFrustracao'},
        {label: 'Possui rede de contatos virtuais', value: 'redeCttVirt'},
        {label: 'Mantem contato com os colegas de sala de aula fora da escola', value: 'cottColForaEscola'},
        {label: 'Não procurado para estabelecer vínculos de amizade por seus pares', value: 'naoProcPares'},
        {label: 'Dificuldade em ver o ponto de vista de outra pessoa (se colocar no lugar do outro', value: 'difVistaOut'},
        {label: 'Não tem empatia com os outros', value: 'ausenciaEmpatia'},
        {label: 'Confia demais nos outros', value: 'confiaOutros'},
        {label: 'Não aprecia o humor', value: 'naoApreHumor'},
    ]
    const comportamento = [
        {label: 'Teimoso', value: 'teimoso'},
        {label: 'Facilmente irritável, bravo, ressentido', value: 'facilBravo'},
        {label: 'Birras frequentes', value: 'birraFreq'},
        {label: 'Heteroagressão', value: 'heteroagressao'},
        {label: 'Autoagressão', value: 'autoagressao'},
        {label: 'Joga ou destrói coisas', value: 'destroiCoisas'},
        {label: 'Mente', value: 'mente'},
        {label: 'Discute com os adultos', value: 'discuteAdultos'},
        {label: 'Baixa tolerância a frustração', value: 'baixaTolFrust'},
        {label: 'Comportamento desafiado', value: 'compDesafiador'},
        {label: 'Foge', value: 'foge'},
        {label: 'Necessita de muita supervisao', value: 'necessitaSuperv'},
        {label: 'Impulsivo', value: 'impulsivo'},
        {label: 'Pouca noção do perigo', value: 'poucaNocaoP'},
        {label: 'Falta à escola', value: 'faltaEscola'},
        {label: 'Perigoso para consigo mesmo ou com os outros', value: 'perigoso'},
        {label: 'Fala sobre se matar', value: 'falasSuicidas'},
        {label: 'Medos incomuns, hábitos ou maneirismos', value: 'habitosIncomuns'},
        {label: 'Parece depressivo', value: 'pareceDepressivo'},
        {label: 'Chora com frequência', value: 'choroFrequente'},
        {label: 'Excessivamente preocupado e ansioso', value: 'excessPreocupAnsi'},
        {label: 'Demasiadamente apegado a certos objetos', value: 'apegoObjetos'},
        {label: 'Sexualmente ativo', value: 'sexualmenteAtivo'},
        {label: 'Problemas de controle vescal - enurese', value: 'enurese'},
        {label: 'Pouco controle esfincteriano - encoprese', value: 'encoprese'},
        {label: 'Tiques motor ou vocal', value: 'tiqueMotorVocal'},
        {label: 'Reação exacerbada ao barulho', value: 'reacaoBarulho'},
        {label: 'Reação exacerbada ao toque', value: 'reacaoToque'},
        {label: 'Sonha acordado excessivamente e fantasia a vida', value: 'sonhaAcordado'},
        {label: 'Problemas com o olfato e paladar', value: 'probOlfatoPaladar'},
        {label: 'Caminha na ponta dos pés', value: 'andaPontaPes'},
        {label: 'Fica balançando o corpo', value: 'balancaCorpo'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])
    return (
        <View>
            <Text>DESENVOLVIMENTO SOCIAL</Text>
            <MultiplaEscolha
                titulo='Quais destas características sociais seu filho apresenta?'
                lista={caracteristicasSociais}
                grupo={dados}
                callback={setDadosLocal}
                chave='caracteristicasSociaisSelecionadas'
            />
            <Text>Quais são as atividades favoritas do seu filho?</Text>
            <TextInput
                style={styles.input}
                value={dados.atividadesFavoritas}
                onChangeText={newText=>setDadosLocal({...dados, atividadesFavoritas: newText})}
            />
            <Text style={{fontWeight: 'bold'}}>COMPORTAMENTO</Text>
            <MultiplaEscolha
                titulo='Marque as opções que descrevam comportamentos apresentados pelo seu filho'
                lista={comportamento}
                callback={setDadosLocal}
                grupo={dados}
                chave='comportamentosSelecionados'
            />
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
    }
})