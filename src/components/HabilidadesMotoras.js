import React, { useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Seletor from "./Seletor";
import MultiplaEscolha from "./MultiplaEscolha";

export default function HabilidadesMotoras() {
    const [habilidadesMotorasSelecionadas, setHabilidadesMotorasSelecionadas] = useState([])
    const [contatoVisualSelecionado, setContatoVisualSelecionado] = useState([])
    const [inclinaCabecaSelecionado, setInclinaCabecaSelecionado] = useState([])
    const [aproximaObjetosSelecionado, setAproximaObjetosSelecionado] = useState([])
    const [afastaObjetosSelecionado, setAfastaObjetosSelecionado] = useState([])
    const [movimentoOlhosSelecionado, setMovimentoOlhosSelecionado] = useState([])
    const [avOftalmoSelecionado, setAvOftalmoSelecionado] = useState([])
    const [dorCabecaSelecionado, setDorCabecaSelecionado] = useState([])
    const [difAuditivaSelecionado, setDifAuditivaSelecionado] = useState([])
    const [realizouAvSelecionado, setRealizouAvSelecionado] = useState([])
    const [frequentaEscolaSelecionado, setFrequentaEscolaSelecionado] = useState([])
    const [nomeEscola, setNomeEscola] = useState('')
    const [fazAeeSelecionado, setFazAeeSelecionado] = useState([])
    const [serieEscola, setSerieEscola] = useState('')
    const [turnoEscola, setTurnoEscola] = useState('')
    const [difAprend, setDifAprend] = useState('')
    const [comportEscola, setComportEscola] = useState('')

    const habilidadesMotoras = [
        {label: 'Pouca coordenação motora fina', value: 'poucaCoordFina'},
        {label: 'Pouca coordenação motora ampla', value: 'poucaCoordAmpla'},
        {label: 'Apresenta desequilíbrio (cai muito ou tropeça muito)', value: 'apresentaDesequilibrio'},
        {label: 'Dificuldade para correr', value: 'difCorrer'},
        {label: 'Problemas de postura', value: 'probPostura'},
        {label: 'Demonstra hiperatividade', value: 'demonstraHiperatividade'},
    ]
    const simOuNao = [
        {label: 'Sim', value: 'sim'},
        {label: 'Não', value: 'não'}
    ]

    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>HABILIDADES MOTORAS</Text>
            <MultiplaEscolha
                titulo='Quais das características a seguir seu filho apresenta?'
                grupo={habilidadesMotorasSelecionadas}
                lista={habilidadesMotoras}
                callback={setHabilidadesMotorasSelecionadas}
            />
            <Text style={{fontWeight: 'bold'}}>VISÃO</Text>
            <Text>Consegue manter contato visual por muito tempo?</Text>
            <Seletor
                selecionado={contatoVisualSelecionado}
                aoMudar={setContatoVisualSelecionado}
                lista={simOuNao}
            />
            <Text>Inclina a cabeça para olhar?</Text>
            <Seletor
                selecionado={inclinaCabecaSelecionado}
                aoMudar={setInclinaCabecaSelecionado}
                lista={simOuNao}
            />
            <Text>Aproxima objetos dos olhos?</Text>
            <Seletor
                selecionado={aproximaObjetosSelecionado}
                aoMudar={setAproximaObjetosSelecionado}
                lista={simOuNao}
            />
            <Text>Afasta os objetos?</Text>
            <Seletor
                selecionado={afastaObjetosSelecionado}
                aoMudar={setAfastaObjetosSelecionado}
                lista={simOuNao}
            />
            <Text>Movimento excessivo dos olhos?</Text>
            <Seletor
                selecionado={movimentoOlhosSelecionado}
                aoMudar={setMovimentoOlhosSelecionado}
                lista={simOuNao}
            />
            <Text>Já realizou avaliação oftalmológica?</Text>
            <Seletor
                selecionado={avOftalmoSelecionado}
                aoMudar={setAvOftalmoSelecionado}
                lista={simOuNao}
            />
            <Text>Reclama de dores de cabeça constantes, principalmente na região fronto-temporal?</Text>
            <Seletor
                selecionado={dorCabecaSelecionado}
                aoMudar={setDorCabecaSelecionado}
                lista={simOuNao}
            />
            <Text style={{fontWeight: 'bold'}}>AUDIÇÃO</Text>
            <Text>Apresenta dificuldade auditiva?</Text>
            <Seletor
                selecionado={difAuditivaSelecionado}
                aoMudar={setDifAuditivaSelecionado}
                lista={simOuNao}
            />
            <Text>Já realizou avaliação?</Text>
            <Seletor
                selecionado={realizouAvSelecionado}
                aoMudar={setRealizouAvSelecionado}
                lista={simOuNao}
            />
            <Text style={{fontWeight: 'bold'}}>DESEMPENHO ACADÊMICO</Text>
            <Text>Frequenta a escola?</Text>
            <Seletor
                selecionado={frequentaEscolaSelecionado}
                aoMudar={setFrequentaEscolaSelecionado}
                lista={simOuNao}
            />
            {frequentaEscolaSelecionado === 'sim'
            ?<View>
                <Text>Qual o nome da escola?</Text>
                <TextInput
                    value={nomeEscola}
                    onChangeText={newText=>setNomeEscola(newText)}
                    style={styles.input}
                />
            </View>
            : null}
            <Text>Faz AEE?</Text>
            <Seletor
                selecionado={fazAeeSelecionado}
                aoMudar={setFazAeeSelecionado}
                lista={simOuNao}
            />
            <Text>Qual a série?</Text>
            <TextInput
                style={styles.input}
                value={serieEscola}
                onChangeText={setSerieEscola}
            />
            <Text>Qual o turno?</Text>
            <TextInput
                style={styles.input}
                value={turnoEscola}
                onChangeText={setTurnoEscola}
            />
            <Text>Apresenta dificuldade na aprendizagem?</Text>
            <TextInput
                style={styles.input}
                value={difAprend}
                onChangeText={setDifAprend}
            />
            <Text>Como é o comportamento no âmbito escolar?</Text>
            <TextInput
                style={styles.input}
                value={comportEscola}
                onChangeText={setComportEscola}
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