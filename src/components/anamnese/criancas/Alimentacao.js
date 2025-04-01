import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Slider from "@react-native-community/slider";
import Seletor from "../../Seletor";

export default function Alimentacao( { setDados }) {
    const [dados, setDadosLocal] = useState({
        mamouSelecionado: [0],
        leiteMatExclMes: '',
        mamouIdade: '',
        mamadeiraSelecionada: [0],
        chupetaSelecionada: [0],
        idadeIntroAlimentar: 0,
        difIntroAlimentarSelecionada: [0],
        qualDifAlimentar: '',
        consistenciasSelecionadas: [0],
        probAlimentacaoSelecionado: [0],
        seletividadeAlimentar: '',
        consistencias: [
            {id: 'solido', label: 'Sólido', value: 'não'},
            {id: 'liquido', label: 'Líquido', value: 'não'},
            {id: 'pastoso', label: 'Pastoso', value: 'não'}
        ],
        problemaAlimentacao: [
            {id: 'alteracaoMastigacao', label: 'Alteração na mastigaçao', value: 'não'},
            {id: 'poucoApetite', label: 'Pouco apetite', value: 'não'},
            {id: 'voracidade', label: 'Voracidade', value: 'não'}
        ]
    })

    const simOuNao = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]

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
            <Text style={{fontWeight: 'bold'}}>Aceita bem as consistencias de alimentos a seguir?</Text>
                        {dados.consistencias.map((item, index) => {
                            return <TouchableOpacity key={index} onPress={()=>{
                                const newConsistencias = [...dados.consistencias]
                                newConsistencias[index].value = item.value === 'não' ? 'sim' : 'não'
                                setDadosLocal({...dados, consistencias: newConsistencias})
                            }}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{item.label}</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
                        <Text style={{fontWeight: 'bold'}}>Apresentou algum problema na alimentação?</Text>
                        {dados.problemaAlimentacao.map((item, index)=> {
                            return <TouchableOpacity key={index} onPress={()=> {
                                const newProblemaAlimentacao = [...dados.problemaAlimentacao]
                                newProblemaAlimentacao[index].value = item.value === 'não' ? 'sim' : 'não'
                                setDadosLocal({...dados, problemaAlimentacao: newProblemaAlimentacao})
                            }}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{item.label}</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        })}
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