import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";

import Seletor from "../../Seletor";

export default function Habilidades( {setDados} ){
    const [dados, setDadosLocal] = useState({
        compreensaoFala: [0],
        resolProb: [0],
        mantemAtencao: [0],
        habOrganizacao: [0],
        recordEventos: [0],
        recordFatos: [0],
        aprendExperiencias: [0],
        entendimentoConceitos: [0],
        outrasDificuldadesSelecionadas: [0],
        outraDifCogn: '',
        habilidadeEspecial: '',
        difCompreensaoLing: [0],
        difComunicExpressiva: [0],
        estereotipiasMovCorporais: [0],
        outrasDificuldades: [
            {id: 'difArticulacao', label: 'Dificuldades de articulação', value: 'não'},
            {id: 'difRitmoEntonacaoFala', label: 'Dificuldade no rítmo de entonação da fala', value: 'não'},
            {id: 'repeteUltPalavra', label: 'Repete a última palavra ou frase ouvida', value: 'não'}, 
            {id: 'difExpressDesejo', label: 'Dificuldade para expressar desejos', value: 'não'},
            {id: 'falaDesorganizada', label: 'Fala desorganizada', value: 'não'},
            {id: 'falaAgramatical', label: 'Fala agramatical', value: 'não'},
            {id: 'falaInfantilizada', label: 'Fala infantilizada', value: 'não'},
            {id: 'aprendizagemLenta', label: 'Aprendizagem lenta', value: 'não'},
            {id: 'esqueceFazerCoisas', label: 'Esquece-se de fazer as coisas', value: 'não'},
            {id: 'distraiFacilmente', label: 'Distrai-se facilmente', value: 'não'},
            {id: 'esqueceInstrucoes', label: 'Esquece frequentemente instruções', value: 'não'},
            {id: 'perdeFreqPertences', label: 'Perde frequentemente pertences', value: 'não'},
            {id: 'difPlanTarefas', label: 'Dificuldade em planejar tarefas', value: 'não'},
            {id: 'semConsequenciasAcoes', label: 'Não prevê consequências das ações', value: 'não'},
            {id: 'pensamentoLentificado', label: 'Pensamento lentificado', value: 'não'},
            {id: 'difDinheiroMatematica', label: 'Dificuldade com dinheiro/matemática', value: 'não'},
            {id: 'poucaNocaoTemporal', label: 'Pouca noção temporal', value: 'não'}
        ]
    })
    
    const niveisHabilidade = [
        {label: 'Acima da média', value: 'acimaMedia'},
        {label: 'Na média', value: 'naMedia'},
        {label: 'Abaixo da média', value: 'abaixoMedia'},
        {label: 'Dificuldades severas', value: 'difSeveras'}
    ]

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]

    const largutaTela = Dimensions.get('window').width
    const ehDesktop = largutaTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>HABILIDADES COGNITIVAS</Text>
            <Text>Classifique as habilidades do seu filho em relação a outros da mesma idade</Text>
            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
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
                </View>
                <View style={ehDesktop?styles.column:null}>
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

                </View>
            </View>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>Marque outras possíveis dificuldades</Text>
            {dados.outrasDificuldades.map((item, index)=>{
                return <TouchableOpacity key={index} onPress={()=>{
                    const novasDificuldades = [...dados.outrasDificuldades]
                    novasDificuldades[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, outrasDificuldades: novasDificuldades})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })
            }

            <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 5}}>Descreva brevemente alguma outra dificuldade cognitiva que seu filho apresente:</Text>
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

const styles =  StyleSheet.create({
    mobileContainer: {
        marginTop: 10,
        gap: 10,
        margin: 10,
    },
    desktopContainer: {
        marginTop: 10,
        gap: 5,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    column: {
        flex: 1,
        marginHorizontal: 5, 
        padding: 5,
        gap: 5
    }
})