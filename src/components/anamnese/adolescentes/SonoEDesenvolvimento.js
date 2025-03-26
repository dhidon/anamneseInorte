import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Seletor from "../../Seletor";
import MultiplaEscolha from "../../MultiplaEscolha";

export default function SonoEDesenvolvimento( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        formaSono: '',
        dormeSozinhoSelecionado: [],
        quemCompartilhaCama:'',
        horarioDormir: '',
        horarioAcordar: '',
        problemaCrescimentoSelecionado: [],
        itensSignificantesSelecionados: [],
        comportamentos:[
            {value: 'sorrir', label: 'Sorrir', idade:''},
            {value: 'rolar', label: 'Rolar', idade: ''},
            {value: 'sentarSemApoio', label: 'Sentar sem apoio', idade:''},
            {value: 'engatinhar', label: 'Engatinhar', idade:''},
            {value: 'andarSemApoio', label: 'Andar sem apoio', idade:''},
            {value: 'correr', label: 'Correr', idade:''},
            {value: 'balbuciar', label: 'Balbuciar', idade:''},
            {value: 'silabas', label: 'Sílabas', idade:''},
            {value: 'palavras', label: 'Palavras', idade:''},
            {value: 'frasesDuasPalavras', label: 'Frases com 2 palavras', idade:''},
            {value: 'amarrarCadarcos', label: 'Amarrar os cadarços', idade:''},
            {value: 'vestirSozinho', label: 'Vestir-se sozinho', idade:''},
            {value: 'comerSozinho', label: 'Comer sozinho', idade:''},
            {value: 'controleDiurnoUrina', label: 'Controle diurno da urina', idade:''},
            {value: 'controleNoturnoUrina', label: 'Controle noturno da urina', idade:''},
            {value: 'controleFezes', label: 'Controle de fezes', idade:''},
            {value: 'andarBicicleta', label: 'Andar de bicicleta', idade:''},
        ]
    })

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]
    const itensSignificantes = [
        {value: 'extrQuietoInativo', label: 'Extremamente quieto ou inativo'},
        {value: 'raraQuietoInativo', label: 'Raramente quieto ou inativo'},
        {value: 'exceInquieto', label: 'Excessivamente inquieto'},
        {value: 'coloAfago', label: 'Não gostava de colo ou afago'},
        {value: 'poucoAlerta', label: 'Pouco alerta'},
        {value: 'difAcalmar', label: 'Dificuldade para se acalmar'},
        {value: 'colicas', label: 'Cólicas'},
        {value: 'sonoExcessivo', label: 'Sono excessivo'},
        {value: 'poucoSono', label: 'Pouco Sono'},
        {value: 'batidasCabeca', label: 'Batidas na cabeça'},
        {value: 'incomodoSom', label: 'Incômodo com som'},
        {value: 'semNocaoP', label: 'Sem noção do perigo'},
        {value: 'exploraTudo', label: 'Explorava tudo o tempo todo'},
        {value: 'excessAcidentes', label: 'Excessivo número de acidentes em comparação com outras crianças'}
    ]

    const atualizarComportamento = (id, newValue) => {
        const comportamentosAtualizados = dados.comportamentos.map(opcao => {
            if (opcao.value === id) {
                return { ...opcao, idade: newValue };
            }
            return opcao;
        });
        setDadosLocal({ ...dados, comportamentos: comportamentosAtualizados });
    };

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View style={styles.container}>
            <Text>SONO</Text>
            <Text>Como é o sono (tranquilo, agitado, acorda durante a noite, chora, insônia, pesadelo...)?</Text>
            <TextInput
                style={styles.input}
                value={dados.formaSono}
                onChangeText={newText=>setDadosLocal({...dados, formaSono: newText})}
            />
            <Text>Dorme sozinho?</Text>
            <Seletor
                selecionado={dados.dormeSozinhoSelecionado}
                aoMudar={value=>setDadosLocal({...dados, dormeSozinhoSelecionado: value})}
                lista={simOuNao}
            />
            <Text>Cama compartilhada com:</Text>
            <TextInput
                style={styles.input}
                value={dados.quemCompartilhaCama}
                onChangeText={newText=>setDadosLocal({...dados, quemCompartilhaCama: newText})}
            />
            <Text>Dorme que horas?</Text>
            <TextInput
                style={styles.input}
                value={dados.horarioDormir}
                onChangeText={newText=>setDadosLocal({...dados, horarioDormir: newText})}
            />
            <Text>Acorda que horas?</Text>
            <TextInput
                style={styles.input}
                value={dados.horarioAcordar}
                onChangeText={newText=>setDadosLocal({...dados, horarioAcordar: newText})}
            />
            <Text>DESENVOLVIMENTO</Text>
            <Text>Teve algum problema de crescimento ou desenvolvimento durante os primeiros anos de vida?</Text>
            <Seletor
                selecionado={dados.problemaCrescimentoSelecionado}
                aoMudar={value=>setDadosLocal({...dados, problemaCrescimentoSelecionado: value})}
                lista={simOuNao}
            />
            <MultiplaEscolha
                lista={itensSignificantes}
                callback={setDadosLocal}
                grupo={dados}
                titulo='Alguns dos itens que seguem estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida?'
                chave='itensSignificantesSelecionados'
            />
            <Text style={{fontWeight: 'bold'}}>Indique a idade aproximada em que seu filho apresentou pela primeira vez os comportamentos a seguir:</Text>
            <Text style={{fontSize: 13}}>Obs.: Assinale 'nunca' se ele nunca demonstrou o comportamento listado. Se não se lembra a idade exata, assinale como cedo, na média ou tarde em relação a outras crianças.</Text>
            {dados.comportamentos.map(opcao => (
                <View key={opcao.value}>
                    <Text>{opcao.label}</Text>
                    <TextInput
                    style={styles.input}
                    value={opcao.idade}
                    onChangeText={newText=>atualizarComportamento(opcao.value, newText)}
                    keyboardType="numeric"
                    />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginTop: 15
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#444",
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: "#4CAF50",
    },
    label: {
        fontSize: 16,
    }
})