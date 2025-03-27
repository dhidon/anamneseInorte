import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import Seletor from "../../Seletor";

export default function Habilidades( {setDados} ){
    const [dados, setDadosLocal] = useState({
        compreensaoFala: [],
        resolProb: [],
        mantemAtencao: [],
        habOrganizacao: [],
        recordEventos: [],
        recordFatos: [],
        aprendExperiencias: [],
        entendimentoConceitos: [],
        outrasDificuldadesSelecionadas: [],
        outraDifCogn: '',
        habilidadeEspecial: '',
        difCompreensaoLing: [],
        difComunicExpressiva: [],
        estereotipiasMovCorporais: [],
        outrasDificuldades: [
            {id: 1, label: 'Dificuldades de articulação', value: 'não'},
            {id: 2, label: 'Dificuldade no rítmo de entonação da fala', value: 'não'},
            {id: 3, label: 'Repete a última palavra ou frase ouvida', value: 'não'}, 
            {id: 4, label: 'Dificuldade para expressar desejos', value: 'não'},
            {id: 5, label: 'Fala desorganizada', value: 'não'},
            {id: 6, label: 'Fala agramatical', value: 'não'},
            {id: 7, label: 'Fala infantilizada', value: 'não'},
            {id: 8, label: 'Aprendizagem lenta', value: 'não'},
            {id: 9, label: 'Esquece-se de fazer as coisas', value: 'não'},
            {id: 10, label: 'Distrai-se facilmente', value: 'não'},
            {id: 11, label: 'Esquece frequentemente instruções', value: 'não'},
            {id: 12, label: 'Perde frequentemente pertences', value: 'não'},
            {id: 13, label: 'Dificuldade em planejar tarefas', value: 'não'},
            {id: 14, label: 'Não prevê consequências das ações', value: 'não'},
            {id: 15, label: 'Pensamento lentificado', value: 'não'},
            {id: 16, label: 'Dificuldade com dinheiro/matemática', value: 'não'},
            {id: 17, label: 'Pouca noção temporal', value: 'não'}
        ]
    })
    
    const niveisHabilidade = [
        {label: 'Acima da média', value: 'acimaMedia'},
        {label: 'Na média', value: 'naMedia'},
        {label: 'Abaixo da média', value: 'abaixoMedia'},
        {label: 'Dificuldades severas', value: 'difSeveras'}
    ]

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text>HABILIDADES COGNITIVAS</Text>
            <Text>Classifique as habilidades do seu filho em relação a outros da mesma idade</Text>
            <Text>Compreensão da fala:</Text>
            <Seletor
                selecionado={dados.compreensaoFala}
                aoMudar={value=>setDadosLocal({...dados, compreensaoFala: value})}
                lista={niveisHabilidade}
            />
            <Text>Resolução de problemas:</Text>
            <Seletor
                selecionado={dados.resolProb}
                aoMudar={value=>setDadosLocal({...dados, resolProb: value})}
                lista={niveisHabilidade}
            />
            <Text>Mamtém a atenção:</Text>
            <Seletor
                selecionado={dados.mantemAtencao}
                aoMudar={value=>setDadosLocal({...dados, mantemAtencao: value})}
                lista={niveisHabilidade}
            />
            <Text>Habilidades de organização:</Text>
            <Seletor
                selecionado={dados.habOrganizacao}
                aoMudar={value=>setDadosLocal({...dados, habOrganizacao: value})}
                lista={niveisHabilidade}
            />
            <Text>Recordação de eventos:</Text>
            <Seletor
                selecionado={dados.recordEventos}
                aoMudar={value=>setDadosLocal({...dados, recordEventos: value})}
                lista={niveisHabilidade}
            />
            <Text>Recordação de fatos:</Text>
            <Seletor
                selecionado={dados.recordFatos}
                aoMudar={value=>setDadosLocal({...dados, recordFatos: value})}
                lista={niveisHabilidade}
            />
            <Text>Aprendizagem a partir de experiências:</Text>
            <Seletor
                selecionado={dados.aprendExperiencias}
                aoMudar={value=>setDadosLocal({...dados, aprendExperiencias: value})}
                lista={niveisHabilidade}
            />
            <Text>Entendimento de conceitos:</Text>
            <Seletor
                selecionado={dados.entendimentoConceitos}
                aoMudar={value=>setDadosLocal({...dados, entendimentoConceitos: value})}
                lista={niveisHabilidade}
            />
             <Text style={{fontWeight: 'bold', marginBottom: 5}}>Marque outras possíveis dificuldades</Text>
                        {dados.outrasDificuldades.map((item, index)=>{
                            return <TouchableOpacity key={index} onPress={()=>{
                                const novasDificuldades = [...dados.outrasDificuldades]
                                novasDificuldades[index].value = item.value === 'não' ? 'sim' : 'não'
                                setDadosLocal({...dados, outrasDificuldades: novasDificuldades})
                            }}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{item.label}</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        })
                        }
            <Text>Descreva brevemente alguma outra dificuldade cognitiva que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={dados.outraDifCogn}
                onChangeText={newText=>setDadosLocal({...dados, outraDifCogn: newText})}
            />
            <Text>Descreva brevemente alguma habilidade especial que seu filho apresente:</Text>
            <TextInput
                style={styles.input}
                value={dados.habilidadeEspecial}
                onChangeText={newText=>setDadosLocal({...dados, habilidadeEspecial: newText})}
            />
            <Text>Dificuldade na compreensão da linguagem?</Text>
            <Seletor
                selecionado={dados.difCompreensaoLing}
                aoMudar={value=>setDadosLocal({...dados, difCompreensaoLing: value})}
                lista={simOuNao}
            />
            <Text>Dificuldade na comunicação expressiva?</Text>
            <Seletor
                selecionado={dados.difComunicExpressiva}
                aoMudar={value=>setDadosLocal({...dados, difComunicExpressiva: value})}
                lista={simOuNao}
            />
            <Text>Realiza estereotipias ou movimentos corporais?</Text>
            <Seletor
                selecionado={dados.estereotipiasMovCorporais}
                aoMudar={value=>setDadosLocal({...dados, estereotipiasMovCorporais: value})}
                lista={simOuNao}
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