import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";

import Seletor from "../../Seletor";

export default function HabilidadesMotoras( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        habilidadesMotorasSelecionadas: [0],
        contatoVisualSelecionado: [0],
        inclinaCabecaSelecionado: [0],
        aproximaObjetosSelecionado: [0],
        afastaObjetosSelecionado: [0],
        movimentoOlhosSelecionado: [0],
        avOftalmoSelecionado: [0],
        dorCabecaSelecionado: [0],
        difAuditivaSelecionado: [0],
        realizouAvSelecionado: [0],
        frequentaEscolaSelecionado: [0],
        nomeEscola: '',
        fazAeeSelecionado: [0],
        serieEscola: '',
        turnoEscola: '',
        difAprend: '',
        comportEscola: '',
        habilidadesMotoras: [
            {id: 'poucaCoordenacaoFina', label: 'Pouca coordenação motora fina', value: 'não'},
            {id: 'poucaCoordenacaoAmpla', label: 'Pouca coordenação motora ampla', value: 'não'},
            {id: 'desequilibrio', label: 'Apresenta desequilíbrio (cai muito ou tropeça muito)', value: 'não'},
            {id: 'difCorrer', label: 'Dificuldade para correr', value: 'não'},
            {id: 'probPostura', label: 'Problemas de postura', value: 'não'},
            {id: 'hiperatividade', label: 'Demonstra hiperatividade', value: 'não'},
        ]
    })

    const simOuNao = [
        {label: 'Sim', value: 'sim'},
        {label: 'Não', value: 'não'}
    ]

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>HABILIDADES MOTORAS</Text>
            <Text>Assinale as caracteristicas a seguir que seu filho apresenta</Text>
            {dados.habilidadesMotoras.map((item, index)=>{
                return <TouchableOpacity key={index} onPress={()=> {
                    const newHabilidades = [...dados.habilidadesMotoras]
                    newHabilidades[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, habilidadesMotoras: newHabilidades})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBorromWidth: 1}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 5}}>VISÃO</Text>
            <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Consegue manter contato visual por muito tempo?</Text>
                    <Seletor
                        selecionado={dados.contatoVisualSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, contatoVisualSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Inclina a cabeça para olhar?</Text>
                    <Seletor
                        selecionado={dados.inclinaCabecaSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, inclinaCabecaSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Aproxima objetos dos olhos?</Text>
                    <Seletor
                        selecionado={dados.aproximaObjetosSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, aproximaObjetosSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Afasta os objetos?</Text>
                    <Seletor
                        selecionado={dados.afastaObjetosSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, afastaObjetosSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Movimento excessivo dos olhos?</Text>
                    <Seletor
                        selecionado={dados.movimentoOlhosSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, movimentoOlhosSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Já realizou avaliação oftalmológica?</Text>
                    <Seletor
                        selecionado={dados.avOftalmoSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, avOftalmoSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Reclama de dores de cabeça constantes, principalmente na região fronto-temporal?</Text>
                    <Seletor
                        selecionado={dados.dorCabecaSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, dorCabecaSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>
            </View>
            <Text style={{fontWeight: 'bold'}}>AUDIÇÃO</Text>
            <Text>Apresenta dificuldade auditiva?</Text>
            <Seletor
                selecionado={dados.difAuditivaSelecionado}
                aoMudar={value=>setDadosLocal({...dados, difAuditivaSelecionado: value})}
                lista={simOuNao}
            />
            <Text>Já realizou avaliação?</Text>
            <Seletor
                selecionado={dados.realizouAvSelecionado}
                aoMudar={value=>setDadosLocal({...dados, realizouAvSelecionado: value})}
                lista={simOuNao}
            />
            <Text style={{fontWeight: 'bold'}}>DESEMPENHO ACADÊMICO</Text>
            <Text>Frequenta a escola?</Text>
            <Seletor
                selecionado={dados.frequentaEscolaSelecionado}
                aoMudar={value=>setDadosLocal({...dados, frequentaEscolaSelecionado: value})}
                lista={simOuNao}
            />
            {dados.frequentaEscolaSelecionado === 'sim'
            ?<View>
                <Text>Qual o nome da escola?</Text>
                <TextInput
                    value={dados.nomeEscola}
                    onChangeText={newText=>setDadosLocal({...dados, nomeEscola: newText})}
                    style={styles.input}
                />
            </View>
            : null}
            <Text>Faz AEE?</Text>
            <Seletor
                selecionado={dados.fazAeeSelecionado}
                aoMudar={value=>setDadosLocal({...dados, fazAeeSelecionado: value})}
                lista={simOuNao}
            />
            <Text>Qual a série?</Text>
            <TextInput
                style={styles.input}
                value={dados.serieEscola}
                onChangeText={newText=>setDadosLocal({...dados, serieEscola: newText})}
            />
            <Text>Qual o turno?</Text>
            <TextInput
                style={styles.input}
                value={dados.turnoEscola}
                onChangeText={newText=>setDadosLocal({...dados, turnoEscola: newText})}
            />
            <Text>Apresenta dificuldade na aprendizagem?</Text>
            <TextInput
                style={styles.input}
                value={dados.difAprend}
                onChangeText={newText=>setDadosLocal({...dados, difAprend: newText})}
            />
            <Text>Como é o comportamento no âmbito escolar?</Text>
            <TextInput
                style={styles.input}
                value={dados.comportEscola}
                onChangeText={newText=>setDadosLocal({...dados, comportEscola: newText})}
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