import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Platform, Dimensions } from "react-native";
import Seletor from "../../Seletor"
import { loadPartialConfigAsync } from "@babel/core";

export default function GestacaoNascimento( { setDados } ) {
    const [dados, setDadosLocal] = useState({
        gestacaoSelecionada: [0],
        preNatalSelecionado: [0],
        intercorrenciaSelecionada: [0],
        qualIntercorrencia: '',
        medicamentoSelecionado: [0],
        partoSelecionado: [
            {id: 1, label: 'Normal', value: 'normal'},
            {id: 2, label: 'Cesárea', value: 'cesarea'}
        ],
        motivoParto: '',
        semanas: '',
        primeiro: '',
        quinto: '',
        comprimento: '',
        problemaSelecionado: [0],
        oxigenioSelecionado: [0],
        cianoticoSelecionado: [0],
        chorouSelecionado: [0],
        ictericiaSelecionada: [0],
        fototerapiaSelecionado: [0]
    })
    
    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'nao'}]

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])
  
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>3. Histórico de desenvolvimento</Text>
            <Text>GESTAÇÃO E NASCIMENTO</Text>
            <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
                <View style={ehDesktop ? styles.column : null}>
                    <Text>A gestação foi planejada?</Text>
                    <Seletor
                        selecionado={dados.gestacaoSelecionada}
                        aoMudar={value=>setDadosLocal({...dados, gestacaoSelecionada: value})}
                        lista={simOuNao}
                    />
                    <Text>Realizou pré-natal?</Text>
                    <Seletor
                        selecionado={dados.preNatalSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, preNatalSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>

                <View style={ehDesktop ? styles.column : null}>
                    <Text>Teve alguma intercorrência durante a gravidez?</Text>
                    <Seletor
                        selecionado={dados.intercorrenciaSelecionada}
                        aoMudar={value=>setDadosLocal({...dados, intercorrenciaSelecionada: value})}
                        lista={simOuNao}
                    />
                    {dados.intercorrenciaSelecionada === 'sim'
                    ?<View>
                        <Text>Qual?</Text>
                        <TextInput
                            style={styles.input}
                            value={dados.qualIntercorrencia}
                            onChangeText={newText=>setDadosLocal({...dados, qualIntercorrencia: newText})}
                        />
                    </View>
                    : null}
                    <Text>Fez uso de medicamentos durante a estação?</Text>
                    <Seletor
                        selecionado={dados.medicamentoSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, medicamentoSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>
            </View>
            
            <Text>Qual foi o tipo de parto e por que?</Text>
            <Seletor
                selecionado={dados.partoSelecionado}
                aoMudar={value=>setDadosLocal({...dados, partoSelecionado: value})}
                lista={dados.partoSelecionado}
            />
            <TextInput
                style={styles.input}
                value={dados.motivoParto}
                onChangeText={newText=>setDadosLocal({...dados, motivoParto: newText})}
                placeholder='Qual o motivo?'
            />
            <Text>A criança nasceu com quantas semanas?</Text>
            <TextInput
                style={styles.input}
                value={dados.semanas}
                onChangeText={newText=>setDadosLocal({...dados, semanas: newText})}
            />
            <Text style={{marginTop: 10}}>APGAR:</Text>
                <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
                    <View style={ehDesktop ? styles.column : null}>
                        <TextInput
                            style={styles.input}
                            value={dados.primeiro}
                            onChangeText={newText=>setDadosLocal({...dados, primeiro: newText})}
                            placeholder="1º minuto"
                        />
                        <TextInput
                            style={styles.input}
                            value={dados.quinto}
                            onChangeText={newText=>setDadosLocal({...dados, quinto: newText})}
                            placeholder="5º minuto"
                        />
                    </View>
                    <View style={ehDesktop ? styles.column : null}>
                        <TextInput
                            style={styles.input}
                            value={dados.peso}
                            onChangeText={newText=>setDadosLocal({...dados, peso: newText})}
                            placeholder="Quantos quilos?"
                        />
                        <TextInput
                            style={styles.input}
                            value={dados.comprimento}
                            onChangeText={newText=>setDadosLocal({...dados, comprimento: newText})}
                            placeholder="Qual o comprimento?"
                        />
                    </View>
                </View>

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Houve algum problema com o bebê logo que nasceu?</Text>
                    <Seletor
                        selecionado={dados.problemaSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, problemaSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>O bebê precisou de oxigênio?</Text>
                    <Seletor
                        selecionado={dados.oxigenioSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, oxigenioSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>Nasceu cianótico?</Text>
                    <Seletor
                        selecionado={dados.cianoticoSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, cianoticoSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>
                <View style={ehDesktop?styles.column:null}>
                    <Text>O bebê chorou logo?</Text>
                    <Seletor
                        selecionado={dados.chorouSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, chorouSelecionado: value})}
                        lista={simOuNao}
                    />
                    <Text>O bebê apresentava sinais de icterícia?</Text>
                    <Seletor
                        selecionado={dados.ictericiaSelecionada}
                        aoMudar={value=>setDadosLocal({...dados, ictericiaSelecionada: value})}
                        lista={simOuNao}
                    />
                    <Text>Precisou fazer fototerapia?</Text>
                    <Seletor
                        selecionado={dados.fototerapiaSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, fototerapiaSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>
            </View>
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