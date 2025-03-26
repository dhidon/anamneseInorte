import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Seletor from "../../Seletor";


export default function Identificacao( {setData} ) {
    const [dados, setDadosLocal] = useState({
        data: '',
        nome: '',
        idade: '',
        nascimento: '',
        sus: '',
        endereco: '',
        informante: '',
        bairro: '',
        cep: '',
        cidadeUf: '',
        mae: '',
        nascimentoMae: '',
        profissaoMae: '',
        pai: '',
        nascimentoPai: '',
        profissaoPai: '',
        estadoCivilSelecionado: 0,
        idadeSeparacao: '',
        guardaSelecionada: 0,
        padrastoMadrasta: '',
        motivo: '',
        guardiao: '',
        guardiaoLegalSelecionado: 0
    })

    const estadoCivil = [
        { label: 'Casados', value: 'casados' },
        { label: 'Separados', value: 'separados' },
        { label: 'Divorciados', value: 'divorciados' },
        { label: 'Viúvo(a)', value: 'viuvo(a)' },
        { label: 'Outro', value: 'outro' }
    ]
    const guarda = [
        { label: 'Mãe', value: 'mãe' },
        { label: 'Pai', value: 'pai' },
        { label: 'Guarda Compartilhada', value: 'guarda compartilhada' },
        { label: 'Outro', value: 'outro' }
    ]
    const guardiaoLegal = [
        { label: 'Pais adotivos', value: 'pais adotivos' },
        { label: 'Pais de criação', value: 'pais de criação' },
        { label: 'Outros membros da família', value: 'outros membros da família' },
        { label: 'Instituição', value: 'instituição' }
    ]

    const formatarData = (texto, callback) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        if (textoFiltrado.length >= 5) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4) + '/' + textoFiltrado.substring(4,8)
        } else if (textoFiltrado.length >= 3) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4)
        }
        callback({...dados, data: textoFiltrado})
    }

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setDadosLocal({...dados, cep: textoFiltrado})
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setDadosLocal({...dados, sus: textoFiltrado})
    }

    const generateIdade = () => {
        const idade = new Date().getFullYear() - new Date(dados.nascimento).getFullYear()
        setDadosLocal({...dados, idade: idade})
    }
    
    useEffect(() => {
        generateIdade()
    }, [dados.nascimento])

    useEffect(()=>{
        setData(dados)
    }, [dados])

    return (
            <View style={styles.container}>
                <View>
                    <Text>Data:</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, width: '40%', textAlign: 'center', height: 40}} 
                        onChangeText={texto=>formatarData(texto, setDadosLocal)}
                        placeholder='DD/MM/AAAA'
                        value={dados.data}
                    />
                </View>
            <Text style={styles.titulo}>1. Dados de Identificação</Text>
            <Text>Nome completo:</Text>
            <TextInput
                placeholder={dados.nome}
                style={styles.input}
                onChangeText={newText => setDadosLocal({...dados, nome: newText})}
            />
            <Text>Data de nascimento:</Text>
            <TextInput
                style={styles.input}
                placeholder='DD/MM/AAAA'
                onChangeText={texto=>formatarData(texto, setDadosLocal)}
                value={dados.nascimento}
            />
            
            
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 30}}>
            <Text>Idade:</Text>
            <Text style={{borderWidth: 1, borderRadius: 3, padding: 5}}>
                {dados.idade ? dados.idade : '0'}
            </Text>
            </View>
            <Text>Nº SUS:</Text>
            <TextInput
                value={dados.sus}
                style={styles.input}
                placeholder='___ ___ ___ ___'
                onChangeText={formatarSus}
                maxLength={19}
                keyboardType="numeric"
            />
            <Text>Endereço:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, endereco: newText})}
                value={dados.endereco}
            />
            <Text>Bairro:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, bairro: newText})}
                value={dados.bairro}
            />
            <Text>CEP:</Text>
            <TextInput
                style={styles.input}
                onChangeText={formatarCep}
                value={dados.cep}
            />
            <Text>Cidade/UF:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, cidadeUf: newText})}
                value={dados.cidadeUf}
            />
            <Text>Informante:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, informante: newText})}
                value={dados.informante}
            />
            <Text>Dados da mãe:</Text>
            <TextInput
                style={styles.input}
                onChangeText={newText => setDadosLocal({...dados, mae: newText})}
                value={dados.mae}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setDadosLocal)}
                value={dados.nascimentoMae}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={dados.profissaoMae}
                onChangeText={newText => setDadosLocal({...dados, profissaoMae: newText})}
                placeholder='Profissão'
            />
            <Text>Dados do pai:</Text>
            <TextInput
                style={styles.input}
                onChaneText={newText => setDadosLocal({...dados, pai: newText})}
                value={dados.pai}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setDadosLocal)}
                value={dados.nascimentoPai}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={dados.profissaoPai}
                onChangeText={newText => setDadosLocal({...dados, profissaoPai: newText})}
                placeholder='Profissão'
            />
            <Text>Estado civil dos pais:</Text>
            <Seletor
                selecionado={dados.estadoCivilSelecionado}
                aoMudar={value=>setDadosLocal({...dados, estadoCivilSelecionado: value})}
                lista={estadoCivil}
            />
            {dados.estadoCivilSelecionado === 'separados' || dados.estadoCivilSelecionado === 'divorciados'
            ? <View style={{gap: 10}}>
                <Text>Que idade a criança tinha quando os pais se separaram?</Text>
                <TextInput
                    style={styles.input}
                    value={dados.idadeSeparacao}
                    onChangeText={newText=>setDadosLocal({...dados, idadeSeparacao: newText})}
                />
                <Text>Quem tem a guarda da criança?</Text>
                <Seletor
                    selecionado={dados.guardaSelecionada}
                    aoMudar={value=>setDadosLocal({...dados, guardaSelecionada: value})}
                    lista={guarda}
                />
                {dados.guardaSelecionada !== 'outro'
                ? <View style={{gap: 10}}>
                    <Text>Qual o nome do padrasto/madrasta?</Text>
                    <TextInput
                    style={styles.input}
                    value={dados.padrastoMadrasta}
                    onchangeText={newText => setDadosLocal({...dados, padrastoMadrasta: newText})}
                    />
                </View>
                :<View style={{gap: 10}}>
                    <Text>Qual o motivo?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.motivo}
                        onChangeText={newText=>setDadosLocal({...dados, motivo: newText})}
                    />
                    <Text>Quem possui a guarda legal?</Text>
                    <Seletor
                        selecionado={dados.guardiaoLegalSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, guardiaoLegalSelecionado: value})}
                        lista={guardiaoLegal}
                    />
                    <TextInput
                        style={styles.input}
                        value={dados.guardiao}
                        onChangeText={newText=>setDadosLocal({...dados, guardiao: newText})}
                        placeholder='Nome'
                    />
                </View>}
            </View>
            : null
            }
            </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold'
    },
    container: {
        marginTop: 10,
        
        gap: 10,

    },
    input: {
        borderWidth: 1, 
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})