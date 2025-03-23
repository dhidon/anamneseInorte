import React, { useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Seletor from "./Seletor";
import MultiplaEscolha from "./MultiplaEscolha";

export default function Habilidades(){
    const [compreensaoFala, setCompreensaoFala] = useState([])
    const [resolProb, setResolProb] = useState([])
    const [mantemAtencao, setMantemAtencao] = useState([])
    const [habOrganizacao, setHabOrganizao] = useState([])
    const [recordEventos, setRecordEventos] = useState([])
    const [recordFatos, setRecordFatos] = useState([])
    const [aprendExperiencias, setAprendExperiencias] = useState([])
    const [entendimentoConceitos, setEntendimentoConceitos] = useState([])
    const [outrasDificuldadesSelecionadas, setOutrasDificuldadesSelecionadas] = useState([])
    const [outraDifCogn, setOutraDifCogn] = useState('')
    const [habilidadeEspecial, setHabilidadeEspecial] = useState('')
    const [difCompreensaoLing, setDifCompreensaoLing] = useState([])
    const [difComunicExpressiva, setDifComunicExpressiva] = useState([])
    const [estreotipiasMovCorporais, setEstereotipiasMovCorporais] = useState([])
    
    const niveisHabilidade = [
        {label: 'Acima da média', value: 'acimaMedia'},
        {label: 'Na média', value: 'naMedia'},
        {label: 'Abaixo da média', value: 'abaixoMedia'},
        {label: 'Dificuldades severas', value: 'difSeveras'}
    ]
    const outrasDificuldades = [
        {label: 'Dificuldades de articulação', value: 'difArticulacao'},
        {label: 'Dificuldade no rítmo de entonação da fala (Ex.: lento, rápido, baixo, alto...)', value: 'difRitmoTomFala'},
        {label: 'Repete a última palavra ou frase imediatamente ouvida', value: 'repeticaoPalavras'},
        {label: 'Dificuldade para encontrar palavras para expressar seus desejos', value: 'difPalavrasDesejos'},
        {label: 'Fala desorganizada', value: 'falaDesorganizada'},
        {label: 'Fala agramatical', value: 'falaAgramatical'},
        {label: 'Fala infantilizada', value: 'falaInfantilizada'},
        {label: 'Aprendizagem lenta', value: 'aprendizagemLenta'},
        {label: 'Esquece-se de fazer as coisas', value: 'esqueceFazerCoisas'},
        {label: 'Distrai-se facilmente', value: 'distraiFacilmente'},
        {label: 'Esquece frequentemente das instruções', value: 'esqueceInstrucoes'},
        {label: 'Perde frequentemente os seus pertences', value: 'perdePertences'},
        {label: 'Dificuldade em planejar tarefas', value: 'difPlanTarefas'},
        {label: 'Não prevê as consequências das ações', value: 'semConseqAcoes'},
        {label: 'Pensamento lentificado', value: 'pensamentoLentificado'},
        {label: 'Dificuldade em lidar com dinheiro ou com a matemática', value: 'difDinheiroMatematica'},
        {label: 'Pouca noção temporal', value: 'poucaNocaoTemporal'}
    ]
    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]

    return (
        <View>
            <Text>HABILIDADES COGNITIVAS</Text>
            <Text>Classifique as habilidades do seu filho em relação a outros da mesma idade</Text>
            <Text>Compreensão da fala:</Text>
            <Seletor
                selecionado={compreensaoFala}
                aoMudar={setCompreensaoFala}
                lista={niveisHabilidade}
            />
            <Text>Resolução de problemas:</Text>
            <Seletor
                selecionado={resolProb}
                aoMudar={setResolProb}
                lista={niveisHabilidade}
            />
            <Text>Mamtém a atenção:</Text>
            <Seletor
                selecionado={mantemAtencao}
                aoMudar={setMantemAtencao}
                lista={niveisHabilidade}
            />
            <Text>Habilidades de organização:</Text>
            <Seletor
                selecionado={habOrganizacao}
                aoMudar={setHabOrganizao}
                lista={niveisHabilidade}
            />
            <Text>Recordação de eventos:</Text>
            <Seletor
                selecionado={recordEventos}
                aoMudar={setRecordEventos}
                lista={niveisHabilidade}
            />
            <Text>Recordação de fatos:</Text>
            <Seletor
                selecionado={recordFatos}
                aoMudar={setRecordFatos}
                lista={niveisHabilidade}
            />
            <Text>Aprendizagem a partir de experiências:</Text>
            <Seletor
                selecionado={aprendExperiencias}
                aoMudar={setAprendExperiencias}
                lista={niveisHabilidade}
            />
            <Text>Entendimento de conceitos:</Text>
            <Seletor
                selecionado={entendimentoConceitos}
                aoMudar={setEntendimentoConceitos}
                lista={niveisHabilidade}
            />
            <MultiplaEscolha
                titulo='Outras possíveis dificuldades'
                grupo={outrasDificuldadesSelecionadas}
                lista={outrasDificuldades}
                callback={setOutrasDificuldadesSelecionadas}
            />
            <Text>Descreva brevemente alguma outra dificuldade cognitiva que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={outraDifCogn}
                onChangeText={newText=>setOutraDifCogn(newText)}
            />
            <Text>Descreva brevemente alguma habilidade especial que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={habilidadeEspecial}
                onChangeText={newText=>setHabilidadeEspecial(newText)}
            />
            <Text>Dificuldade na compreensão da linguagem?</Text>
            <Seletor
                selecionado={difCompreensaoLing}
                aoMudar={setDifCompreensaoLing}
                lista={simOuNao}
            />
            <Text>Dificuldade na comunicação expressiva?</Text>
            <Seletor
                selecionado={difComunicExpressiva}
                aoMudar={setDifComunicExpressiva}
                lista={simOuNao}
            />
            <Text>Realiza estereotipias ou movimentos corporais?</Text>
            <Seletor
                selecionado={estreotipiasMovCorporais}
                aoMudar={setEstereotipiasMovCorporais}
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