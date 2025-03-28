import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Seletor from "../../Seletor"

export default function GestacaoNascimento( { setDados } ) {
    const [dados, setDadosLocal] = useState({
        gestacaoSelecionada: [],
        preNatalSelecionado: [],
        intercorrenciaSelecionada: [],
        qualIntercorrencia: '',
        medicamentoSelecionado: [],
        partoSelecionado: [
            {id: 1, label: 'Normal', value: 'normal'},
            {id: 2, label: 'Cesárea', value: 'cesarea'}
        ],
        motivoParto: [],
        semanas: '',
        primeiro: '',
        quinto: '',
        comprimento: '',
        problemaSelecionado: [],
        oxigenioSelecionado: [],
        cianoticoSelecionado: [],
        chorouSelecionado: [],
        ictericiaSelecionada: [],
        fototerapiaSelecionado: []
    })
    
    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'nao'}]

    useEffect(()=>{
        setDados(dados)
    }, [dados])
  
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>3. Histórico de desenvolvimento</Text>
            <Text>GESTAÇÃO E NASCIMENTO</Text>
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
            <Text>APGAR:</Text>
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
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})