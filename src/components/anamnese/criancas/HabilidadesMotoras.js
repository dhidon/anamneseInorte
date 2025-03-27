import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";
import MultiplaEscolha from "../../MultiplaEscolha";

export default function HabilidadesMotoras( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        habilidadesMotorasSelecionadas: [],
        contatoVisualSelecionado: [],
        inclinaCabecaSelecionado: [],
        aproximaObjetosSelecionado: [],
        afastaObjetosSelecionado: [],
        movimentoOlhosSelecionado: [],
        avOftalmoSelecionado: [],
        dorCabecaSelecionado: [],
        difAuditivaSelecionado: [],
        realizouAvSelecionado: [],
        frequentaEscolaSelecionado: [],
        nomeEscola: '',
        fazAeeSelecionado: [],
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
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}
            <Text style={{fontWeight: 'bold'}}>VISÃO</Text>
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

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})