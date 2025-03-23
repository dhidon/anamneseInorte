import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Slider from "@react-native-community/slider";
import Seletor from "./Seletor";
import MultiplaEscolha from "./MultiplaEscolha";

export default function Alimentacao() {
    const [mamouSelecionado, setMamouSelecionado] = useState([])
    const [leiteMatExclMes, setLeiteMatExclMes] = useState('')
    const [mamouIdade, setMamouIdade] = useState('')
    const [mamadeiraSelecionada, setMamamdeiraSelecionada] = useState([])
    const [chupetaSelecionada, setChupetaSelecionada] = useState([])
    const [idadeIntroAlimentar, setIdadeIntroAlimentar] = useState(0)
    const [difIntroAlimentarSelecionada, setDifIntroAlimentarSelecionada] = useState([])
    const [qualDifAlimentar, setQualDifAlimentar] = useState('')
    const [consistenciasSelecionadas, setConsistenciasSelecionadas] = useState([])
    const [probAlimentacaoSelecionado, setProbAlimentacaoSelecionado] = useState([])
    const [seletividadeAlimentar, setSeletividadeAlimentar] = useState('')

    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]
    const consistencias = [
        {id: 0, label: 'Sólido'},
        {id: 1, label: 'Líquido'},
        {id: 2, label: 'Pastoso'}
    ]
    const problemaAlimentacao = [
        {id: 0, label: 'Alteração na mastigaçao'},
        {id: 1, label: 'Pouco apetite'},
        {id: 2, label: 'Voracidade'}
    ]

    return (
        <View style={styles.container}>
            <Text>ALIMENTAÇÃO</Text>
            <Text>A criança mamou?</Text>
            <Seletor
                selecionado={mamouSelecionado}
                aoMudar={setMamouSelecionado}
                lista={simOuNao}
            />
            {mamouSelecionado === 'sim'
            ? <View>
                <Text>Aleitamento materno esclusivo até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={leiteMatExclMes}
                    onChangeText={newText=>setLeiteMatExclMes(newText)}
                />
                <Text>Mamou até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={mamouIdade}
                    onChangeText={newText=>setMamouIdade(newText)}
                />
            </View>
            :null}
            <Text>Usou mamadeira?</Text>
            <Seletor
                selecionado={mamadeiraSelecionada}
                aoMudar={setMamamdeiraSelecionada}
                lista={simOuNao}
            />
            <Text>Usou chupeta?</Text>
            <Seletor
                selecionado={chupetaSelecionada}
                aoMudar={setChupetaSelecionada}
                lista={simOuNao}
            />
            <Text>Com qual idade foi feita a introdução alimentar?</Text>
            <Slider
                minimumValue={0}
                maximumValue={10}
                value={idadeIntroAlimentar}
                onValueChange={newValue=>setIdadeIntroAlimentar(newValue)}
                step={1}
                style={{width: '90'}}
            />
            <Text>Apresentou dificuldade na introdução alimentar?</Text>
            <Seletor
                selecionado={difIntroAlimentarSelecionada}
                aoMudar={setDifIntroAlimentarSelecionada}
                lista={simOuNao}
            />
            {difIntroAlimentarSelecionada === 'sim'
            ?<View>
                <Text>Quais?</Text>
                <TextInput
                    style={styles.input}
                    value={qualDifAlimentar}
                    onChangeText={newText=>setQualDifAlimentar(newText)}
                />
            </View>
            :null}
            <Text>ATUALMENTE</Text>
            <MultiplaEscolha
            titulo='Aceita bem quais consistências de alimentos?'
            lista={consistencias}
            callback={setConsistenciasSelecionadas}
            grupo={consistenciasSelecionadas}
            />
            <MultiplaEscolha
            titulo='Apresentou algum problema na alimentação?'
            lista={problemaAlimentacao}
            callback={setProbAlimentacaoSelecionado}
            grupo={probAlimentacaoSelecionado}
            />
            <Text>Apresenta alguma seletividade em relação a comida? Quais?</Text>
            <TextInput
                style={styles.input}
                value={seletividadeAlimentar}
                onChangeText={newText=>setSeletividadeAlimentar(newText)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})