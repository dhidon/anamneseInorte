import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Platform, Dimensions } from "react-native";

import Seletor from "../../Seletor";

export default function Desempenho( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        frequentaEscolaSelecionado: [0],
        nomeEscola: '',
        fazAeeSelecionado: [0],
        serieEscola: '',
        turnoEscola: '',
        difAprend: '',
        comportEscola: '',
        habilidadesMotoras: [
            {id: 1, label: 'Pouca coordenação motora fina', value: 'não'},
            {id: 2, label: 'Pouca coordenação motora ampla', value: 'não'},
            {id: 3, label: 'Apresenta desequilíbrio (cai muito ou tropeça muito)', value: 'não'},
            {id: 4, label: 'Dificuldade para correr', value: 'não'},
            {id: 5, label: 'Problemas de postura', value: 'não'},
            {id: 6, label: 'Demonstra hiperatividade', value: 'não'},
        ]
    })

    const simOuNao = [
        {label: 'Sim', value: 'sim'},
        {label: 'Não', value: 'não'}
    ]

    const larguraTela = Dimensions.get("window").width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
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
        paddingLeft: 20,
        marginTop: 5
    },
    column: {
        flex: 1,
        marginHorizontal: 5, 
        padding: 5,
        gap: 5
    }
})