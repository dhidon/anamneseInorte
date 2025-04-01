import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Platform } from "react-native";

import Seletor from "../../Seletor";

export default function SonoEDesenvolvimento( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        formaSono: '',
        dormeSozinhoSelecionado: [0],
        quemCompartilhaCama:'',
        horarioDormir: '',
        horarioAcordar: '',
        problemaCrescimentoSelecionado: [0],
        itensSignificantesSelecionados: [0],
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
        ],
        itensSignificantes: [
            {id: 'extrQuietoInativo', label: 'Extremamente quieto ou inativo', value: 'não'},
            {id: 'raramenteQuietoInativo', label: 'Raramente quieto ou inativo', value: 'não'},
            {id: 'excessInquieto', label: 'Excessivamente inquieto', value: 'não'},
            {id: 'naoColoAfago', label: 'Não gostava de colo ou afago', value: 'não'},
            {id: 'poucoAlerta', label: 'Pouco alerta', value: 'não'},
            {id: 'difAcalmar', label: 'Dificuldade para se acalmar', value: 'não'},
            {id: 'colicas', label: 'Cólicas', value: 'não'},
            {id: 'sonoExcess', label: 'Sono excessivo', value: 'não'},
            {id: 'poucoSono', label: 'Pouco Sono', value: 'não'},
            {id: 'batidasCabeca', label: 'Batidas na cabeça', value: 'não'},
            {id: 'incomodoSom', label: 'Incômodo com som', value: 'não'},
            {id: 'semNocaoPerigo', label: 'Sem noção do perigo', value: 'não'},
            {id: 'eploraTudoSempre', label: 'Explorava tudo o tempo todo', value: 'não'},
            {id: 'numeroAcidentesAcimaMedia', label: 'Excessivo número de acidentes em comparação com outras crianças', value: 'não'}
        ]
    })

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
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

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text>SONO</Text>
            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
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
                </View>

                <View style={ehDesktop?styles.column:null}>
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
                </View>
            </View>


            <Text>DESENVOLVIMENTO</Text>
            <Text>Teve algum problema de crescimento ou desenvolvimento durante os primeiros anos de vida?</Text>
            <Seletor
                selecionado={dados.problemaCrescimentoSelecionado}
                aoMudar={value=>setDadosLocal({...dados, problemaCrescimentoSelecionado: value})}
                lista={simOuNao}
            />
            <Text>Dentre os itens a seguir, pressione aqueles que estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida:</Text>
            {dados.itensSignificantes.map((item, index)=> (
                <TouchableOpacity key={index} onPress={()=>{
                    const newItensSignificantes = [...dados.itensSignificantes]
                    newItensSignificantes[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, itensSignificantes: newItensSignificantes})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <Text style={{fontWeight: 'bold', marginTop: 15}}>Indique a idade aproximada em que seu filho apresentou pela primeira vez os comportamentos a seguir:</Text>
            <Text style={{fontSize: 13, marginTop: 5, marginBottom: 10}}>Obs.: Assinale 'nunca' se ele nunca demonstrou o comportamento listado. Se não se lembra a idade exata, assinale como cedo, na média ou tarde em relação a outras crianças.</Text>
            
            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    {dados.comportamentos.slice(0, Math.ceil(dados.comportamentos.length/2)).map(opcao => (
                        <View key={opcao.value}>
                            <Text>{opcao.label}</Text>
                            <TextInput
                                style={styles.input}
                                value={opcao.idade}
                                onChangeText={newText=>atualizarComportamento(opcao.value, newText)}
                            />
                        </View>
                    ))}
                </View>
                <View style={ehDesktop?styles.column:null}>
                    {dados.comportamentos.slice(Math.ceil(dados.comportamentos.length/2)).map(opcao => (
                        <View key={opcao.value}>
                            <Text>{opcao.label}</Text>
                            <TextInput
                                style={styles.input}
                                value={opcao.idade}
                                onChangeText={newText=>atualizarComportamento(opcao.value, newText)}
                            />
                        </View>
                    ))}
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