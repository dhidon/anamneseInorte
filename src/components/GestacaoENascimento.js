import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Seletor from "./Seletor"

export default function GestacaoNascimento() {
    const [gestacaoSelecionada, setGestacaoSelecionada] = useState([])
    const [preNatalSelecionado, setPreNatalSelecionado] = useState([])
    const [intercorrenciaSelecionada, setIntercorrenciaSelecionada] = useState(0)
    const [qualIntercorrencia, setQualIntercorrencia] = useState('')
    const [medicamentoSelecionado, setMedicamentoSelecionado] = useState([])
    const [partoSelecionado, setPartoSelecionado] = useState([])
    const [motivoParto, setMotivoParto] = useState('')
    const [semanas, setSemanas] = useState('')
    const [primeiro, setPrimeiro] = useState('')
    const [quinto, setQuinto] = useState('')
    const [peso, setPeso] = useState('')
    const [comprimento, setComprimento] = useState('')
    const [problemaSelecionado, setProblemaSelecionado] = useState([])
    const [oxigenioSelecionado, setOxigenioSelecionado] = useState([])
    const [cianoticoSelecionado, setCianoticoSelecionado] = useState([])
    const [chorouSelecionado, setChorouSelecionado] = useState([])
    const [ictericiaSelecionada, setIctericiaSelecionada] = useState([])
    const [fototerapiaSelecionado, setFototerapiaSelecionado] = useState([])

    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'nao'}]
  
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>3. Histórico de desenvolvimento</Text>
            <Text>GESTAÇÃO E NASCIMENTO</Text>
            <Text>A gestação foi planejada?</Text>
            <Seletor
                selecionado={gestacaoSelecionada}
                aoMudar={setGestacaoSelecionada}
                lista={simOuNao}
            />
            <Text>Realizou pré-natal?</Text>
            <Seletor
                selecionado={preNatalSelecionado}
                aoMudar={setPreNatalSelecionado}
                lista={simOuNao}
            />
            <Text>Teve alguma intercorrência durante a gravidez?</Text>
            <Seletor
                selecionado={intercorrenciaSelecionada}
                aoMudar={setIntercorrenciaSelecionada}
                lista={simOuNao}
            />
            {intercorrenciaSelecionada === 'sim'
            ?<View>
                <Text>Qual?</Text>
                <TextInput
                    style={styles.input}
                    value={qualIntercorrencia}
                    onChangeText={newText=>setQualIntercorrencia(newText)}
                />
            </View>
            : null}
            <Text>Fez uso de medicamentos durante a estação?</Text>
            <Seletor
                selecionado={medicamentoSelecionado}
                aoMudar={setMedicamentoSelecionado}
                lista={simOuNao}
            />
            <Text>Qual foi o tipo de parto e por que?</Text>
            <Seletor
                selecionado={partoSelecionado}
                aoMudar={setPartoSelecionado}
                lista={simOuNao}
            />
            <TextInput
                style={styles.input}
                value={motivoParto}
                onChangeText={newText=>setMotivoParto(newText)}
                placeholder='Qual o motivo?'
            />
            <Text>A criança nasceu com quantas semanas?</Text>
            <TextInput
                style={styles.input}
                value={semanas}
                onChangeText={newText=>setSemanas(newText)}
            />
            <Text>APGAR:</Text>
            <TextInput
                style={styles.input}
                value={primeiro}
                onChangeText={newText=>setPrimeiro(newText)}
                placeholder="1º minuto"
            />
            <TextInput
                style={styles.input}
                value={quinto}
                onChangeText={newText=>setQuinto(newText)}
                placeholder="5º minuto"
            />
            <TextInput
                style={styles.input}
                value={peso}
                onChangeText={newText=>setPeso(newText)}
                placeholder="Quantos quilos?"
            />
            <TextInput
                style={styles.input}
                value={comprimento}
                onChangeText={newText=>setComprimento(newText)}
                placeholder="Qual o comprimento?"
            />
            <Text>Houve algum problema com o bebê logo que nasceu?</Text>
            <Seletor
                selecionado={problemaSelecionado}
                aoMudar={setProblemaSelecionado}
                lista={simOuNao}
            />
            <Text>O bebê precisou de oxigênio?</Text>
            <Seletor
                selecionado={oxigenioSelecionado}
                aoMudar={setOxigenioSelecionado}
                lista={simOuNao}
            />
            <Text>Nasceu cianótico?</Text>
            <Seletor
                selecionado={cianoticoSelecionado}
                aoMudar={setCianoticoSelecionado}
                lista={simOuNao}
            />
            <Text>O bebê chorou logo?</Text>
            <Seletor
                selecionado={chorouSelecionado}
                aoMudar={setChorouSelecionado}
                lista={simOuNao}
            />
            <Text>O bebê apresentava sinais de icterícia?</Text>
            <Seletor
                selecionado={ictericiaSelecionada}
                aoMudar={setIctericiaSelecionada}
                lista={simOuNao}
            />
            <Text>Precisou fazer fototerapia?</Text>
            <Seletor
                selecionado={fototerapiaSelecionado}
                aoMudar={setFototerapiaSelecionado}
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