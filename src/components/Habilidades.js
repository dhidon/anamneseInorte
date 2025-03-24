import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Seletor from "./Seletor";
import MultiplaEscolha from "./MultiplaEscolha";

export default function Habilidades( {setDados} ){
    const [dados, setDadosLocal] = useState({
        compreensaoFala: [],
        resolProb: [],
        mantemAtencao: [],
        habOrganizacao: [],
        recordEventos: [],
        recordFatos: [],
        aprendExperiencias: [],
        entendimentoConceitos: [],
        outrasDificuldadesSelecionadas: [],
        outraDifCogn: '',
        habilidadeEspecial: '',
        difCompreensaoLing: [],
        difComunicExpressiva: [],
        estereotipiasMovCorporais: []
    })
    
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

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text>HABILIDADES COGNITIVAS</Text>
            <Text>Classifique as habilidades do seu filho em relação a outros da mesma idade</Text>
            <Text>Compreensão da fala:</Text>
            <Seletor
                selecionado={dados.compreensaoFala}
                aoMudar={value=>setDadosLocal({...dados, compreensaoFala: value})}
                lista={niveisHabilidade}
            />
            <Text>Resolução de problemas:</Text>
            <Seletor
                selecionado={dados.resolProb}
                aoMudar={value=>setDadosLocal({...dados, resolProb: value})}
                lista={niveisHabilidade}
            />
            <Text>Mamtém a atenção:</Text>
            <Seletor
                selecionado={dados.mantemAtencao}
                aoMudar={value=>setDadosLocal({...dados, mantemAtencao: value})}
                lista={niveisHabilidade}
            />
            <Text>Habilidades de organização:</Text>
            <Seletor
                selecionado={dados.habOrganizacao}
                aoMudar={value=>setDadosLocal({...dados, habOrganizacao: value})}
                lista={niveisHabilidade}
            />
            <Text>Recordação de eventos:</Text>
            <Seletor
                selecionado={dados.recordEventos}
                aoMudar={value=>setDadosLocal({...dados, recordEventos: value})}
                lista={niveisHabilidade}
            />
            <Text>Recordação de fatos:</Text>
            <Seletor
                selecionado={dados.recordFatos}
                aoMudar={value=>setDadosLocal({...dados, recordFatos: value})}
                lista={niveisHabilidade}
            />
            <Text>Aprendizagem a partir de experiências:</Text>
            <Seletor
                selecionado={dados.aprendExperiencias}
                aoMudar={value=>setDadosLocal({...dados, aprendExperiencias: value})}
                lista={niveisHabilidade}
            />
            <Text>Entendimento de conceitos:</Text>
            <Seletor
                selecionado={dados.entendimentoConceitos}
                aoMudar={value=>setDadosLocal({...dados, entendimentoConceitos: value})}
                lista={niveisHabilidade}
            />
            <MultiplaEscolha
                titulo='Outras possíveis dificuldades'
                grupo={dados}
                lista={outrasDificuldades}
                callback={setDadosLocal}
                chave='outrasDificuldadesSelecionadas'
            />
            <Text>Descreva brevemente alguma outra dificuldade cognitiva que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={dados.outraDifCogn}
                onChangeText={newText=>setDadosLocal({...dados, outraDifCogn: newText})}
            />
            <Text>Descreva brevemente alguma habilidade especial que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={dados.habilidadeEspecial}
                onChangeText={newText=>setDadosLocal({...dados, habilidadeEspecial: newText})}
            />
            <Text>Dificuldade na compreensão da linguagem?</Text>
            <Seletor
                selecionado={dados.difCompreensaoLing}
                aoMudar={value=>setDadosLocal({...dados, difCompreensaoLing: value})}
                lista={simOuNao}
            />
            <Text>Dificuldade na comunicação expressiva?</Text>
            <Seletor
                selecionado={dados.difComunicExpressiva}
                aoMudar={value=>setDadosLocal({...dados, difComunicExpressiva: value})}
                lista={simOuNao}
            />
            <Text>Realiza estereotipias ou movimentos corporais?</Text>
            <Seletor
                selecionado={dados.estereotipiasMovCorporais}
                aoMudar={value=>setDadosLocal({...dados, estereotipiasMovCorporais: value})}
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