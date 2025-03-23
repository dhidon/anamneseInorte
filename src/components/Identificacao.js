import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Slider from "@react-native-community/slider";
import Seletor from "./Seletor";


export default function Identificacao() {
    const navigation = useNavigation()

    const [data, setData] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState()
    const [nascimento, setNascimento] = useState('')
    const [sus, setSus] = useState('')
    const [endereco, setEndereco] = useState('')
    const [informante, setInformante] = useState('')
    const [bairro, setBairro] = useState('')
    const [cep, setCep] = useState('')
    const [cidadeUf, setCidadeUf] = useState('')
    const [mae, setMae] = useState('')
    const [nascimentoMae, setNascimentoMae] = useState('')
    const [profissaoMae, setProfissaoMae] = useState('')
    const [pai, setPai] = useState('')
    const [nascimentoPai, setNascimentoPai] = useState('')
    const [profissaoPai, setProfissaoPai] = useState('')
    const [estadoCivilSelecionado, setEstadoCivilSelecionado] = useState(0)
    const [idadeSeparacao, setIdadeSeparacao] = useState()
    const [guardaSelecionada, setGuardaSelecionada] = useState(0)
    const [padrastoMadrasta, setPadrastoMadrasta] = useState('')
    const [motivo, setMotivo] = useState('')
    const [guardiao, setGuardiao] = useState('')
    const [guardiaoLegalSelecionado, setGuardiaoLegalSelecionado] = useState(0)

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
        callback(textoFiltrado)
    }

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setCep(textoFiltrado)
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setSus(textoFiltrado)
    }

    const dados = {
        data,
        nome,
        idade,
        nascimento,
        sus,
        endereco,
        informante,
        bairro,
        cep,
        cidadeUf,
        mae,
        nascimentoMae,
        profissaoMae,
        pai,
        nascimentoPai,
        profissaoPai,
        estadoCivilSelecionado,
        idadeSeparacao,
        guardaSelecionada,
        padrastoMadrasta,
        motivo,
        guardiao,
        guardiaoLegalSelecionado
    };

    return (
            <View style={styles.container}>
                <View>
                    <Text>Data:</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, width: '40%', textAlign: 'center', height: 40}} 
                        onChangeText={texto=>formatarData(texto, setData)}
                        placeholder='DD/MM/AAAA'
                        value={data}
                    />
                </View>
            <Text style={styles.titulo}>1. Dados de Identificação</Text>
            <Text>Nome completo:</Text>
            <TextInput
                placeholder={nome}
                style={styles.input}
                onChangeText={(newText) => {setNome(newText)}}
            />
            <Text>Data de nascimento:</Text>
            <TextInput
                style={styles.input}
                placeholder='DD/MM/AAAA'
                onChangeText={texto=>formatarData(texto, setNascimento)}
                value={nascimento}
            />
            
                
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text>Idade:</Text>
                <Slider
                    minimumValue={12}
                    maximumValue={18}
                    value={12}
                    onValueChange={(newValue) => setIdade(newValue)}
                    step={1}
                    style={{width: '80%'}}
                />
                <Text style={{borderWidth: 1, borderRadius: 3, padding: 5}}>{idade}</Text>
            </View>
            <Text>Nº SUS:</Text>
            <TextInput
                value={sus}
                style={styles.input}
                placeholder='___ ___ ___ ___'
                onChangeText={formatarSus}
                maxLength={19}
                keyboardType="numeric"
            />
            <Text>Endereço:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setEndereco(newText)}
                value={endereco}
            />
            <Text>Bairro:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setBairro(newText)}
                value={bairro}
            />
            <Text>CEP:</Text>
            <TextInput
                style={styles.input}
                onChangeText={formatarCep}
                value={cep}
            />
            <Text>Cidade/UF:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setCidadeUf(newText)}
                value={cidadeUf}
            />
            <Text>Informante:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setInformante(newText)}
                value={informante}
            />
            <Text>Dados da mãe:</Text>
            <TextInput
                style={styles.input}
                onChaneText={newText => setMae(newText)}
                value={mae}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setNascimentoMae)}
                value={nascimentoMae}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={profissaoMae}
                onChangeText={newText => setProfissaoMae(newText)}
                placeholder='Profissão'
            />
            <Text>Dados do pai:</Text>
            <TextInput
                style={styles.input}
                onChaneText={newText => setPai(newText)}
                value={pai}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setNascimentoPai)}
                value={nascimentoPai}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={profissaoPai}
                onChangeText={newText => setProfissaoPai(newText)}
                placeholder='Profissão'
            />
            <Text>Estado civil dos pais:</Text>
            <Seletor
                selecionado={estadoCivilSelecionado}
                aoMudar={setEstadoCivilSelecionado}
                lista={estadoCivil}
            />
            {estadoCivilSelecionado === 'separados' || estadoCivilSelecionado === 'divorciados'
            ? <View style={{gap: 10}}>
                <Text>Que idade a criança tinha quando os pais se separaram?</Text>
                <TextInput
                    style={styles.input}
                    value={idadeSeparacao}
                    onChangeText={newText=>setIdadeSeparacao(newText)}
                />
                <Text>Quem tem a guarda da criança?</Text>
                <Seletor
                    selecionado={guardaSelecionada}
                    aoMudar={setGuardaSelecionada}
                    lista={guarda}
                />
                {guardaSelecionada !== 'outro'
                ? <View style={{gap: 10}}>
                    <Text>Qual o nome do padrasto/madrasta?</Text>
                    <TextInput
                    style={styles.input}
                    value={padrastoMadrasta}
                    onchangeText={newText => setPadrastoMadrasta(newText)}
                    />
                </View>
                :<View style={{gap: 10}}>
                    <Text>Qual o motivo?</Text>
                    <TextInput
                        style={styles.input}
                        value={motivo}
                        onChangeText={newText=>setMotivo(newText)}
                    />
                    <Text>Quem possui a guarda legal?</Text>
                    <Seletor
                        selecionado={guardiaoLegalSelecionado}
                        aoMudar={setGuardiaoLegalSelecionado}
                        lista={guardiaoLegal}
                    />
                    <TextInput
                        style={styles.input}
                        value={guardiao}
                        onChangeText={newText=>setGuardiao(newText)}
                        placeholder='Nome'
                    />
                </View>}
            </View>
            : null}
            <Button title='Próximo' onPress={() => navigation.navigate('Sintomas - Adolescente', {dados}) }/>
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