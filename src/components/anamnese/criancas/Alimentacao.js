import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Slider from "@react-native-community/slider";
import Seletor from "../../Seletor";
import MultiplaEscolha from "../../MultiplaEscolha";

export default function Alimentacao( { setDados }) {
    const [dados, setDadosLocal] = useState({
        mamouSelecionado: [],
        leiteMatExclMes: '',
        mamouIdade: '',
        mamadeiraSelecionada: [],
        chupetaSelecionada: [],
        idadeIntroAlimentar: 0,
        difIntroAlimentarSelecionada: [],
        qualDifAlimentar: '',
        consistenciasSelecionadas: [],
        probAlimentacaoSelecionado: [],
        seletividadeAlimentar: ''
    })

    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]
    const consistencias = [
        {value: 0, label: 'Sólido'},
        {value: 1, label: 'Líquido'},
        {value: 2, label: 'Pastoso'}
    ]
    const problemaAlimentacao = [
        {value: 0, label: 'Alteração na mastigaçao'},
        {value: 1, label: 'Pouco apetite'},
        {value: 2, label: 'Voracidade'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View style={styles.container}>
            <Text>ALIMENTAÇÃO</Text>
            <Text>A criança mamou?</Text>
            <Seletor
                selecionado={dados.mamouSelecionado}
                aoMudar={value=>setDadosLocal({...dados, mamouSelecionado: value})}
                lista={simOuNao}
            />
            {dados.mamouSelecionado === 'sim'
            ? <View>
                <Text>Aleitamento materno esclusivo até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={dados.leiteMatExclMes}
                    onChangeText={newText=>setDadosLocal({...dados, leiteMatExclMes: newText})}
                />
                <Text>Mamou até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={dados.mamouIdade}
                    onChangeText={newText=>setDadosLocal({...dados, mamouIdade: newText})}
                />
            </View>
            :null}
            <Text>Usou mamadeira?</Text>
            <Seletor
                selecionado={dados.mamadeiraSelecionada}
                aoMudar={value=>setDadosLocal({...dados, mamadeiraSelecionada: value})}
                lista={simOuNao}
            />
            <Text>Usou chupeta?</Text>
            <Seletor
                selecionado={dados.chupetaSelecionada}
                aoMudar={value=>setDadosLocal({...dados, chupetaSelecionada: value})}
                lista={simOuNao}
            />
            <Text>Com qual idade foi feita a introdução alimentar?</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 10}}>
                <Slider
                    minimumValue={0}
                    maximumValue={10}
                    value={0}
                    onValueChange={newValue=>setDadosLocal({...dados, idadeIntroAlimentar: newValue})}
                    step={1}
                    style={{width: '80%'}}
                />
                <Text style={{borderWidth: 1, borderRadius: 3, padding: 5}}>{dados.idadeIntroAlimentar}</Text>
            </View>
            <Text>Apresentou dificuldade na introdução alimentar?</Text>
            <Seletor
                selecionado={dados.difIntroAlimentarSelecionada}
                aoMudar={value=>setDadosLocal({...dados, difIntroAlimentarSelecionada: value})}
                lista={simOuNao}
            />
            {dados.difIntroAlimentarSelecionada === 'sim'
            ?<View>
                <Text>Quais?</Text>
                <TextInput
                    style={styles.input}
                    value={dados.qualDifAlimentar}
                    onChangeText={newText=>setDadosLocal({...dados, qualDifAlimentar: newText})}
                />
            </View>
            :null}
            <Text>ATUALMENTE</Text>
            <MultiplaEscolha
                titulo='Aceita bem quais consistências de alimentos?'
                lista={consistencias}
                callback={setDadosLocal}
                grupo={dados}
                chave='consistenciasSelecionadas'
            />
            <MultiplaEscolha
                titulo='Apresentou algum problema na alimentação?'
                lista={problemaAlimentacao}
                callback={setDadosLocal}
                grupo={dados}
                chave='probAlimentacaoSelecionado'
            />
            <Text>Apresenta alguma seletividade em relação a comida? Quais?</Text>
            <TextInput
                style={styles.input}
                value={dados.seletividadeAlimentar}
                onChangeText={newText=>setDadosLocal({...dados, seletividadeAlimentar: newText})}
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