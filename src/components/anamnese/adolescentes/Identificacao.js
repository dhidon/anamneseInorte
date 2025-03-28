import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Seletor from "../../Seletor";


export default function Identificacao( {setData} ) {
    const [dados, setDadosLocal] = useState({
        data_cad_1: '',
        nome_cad_2: '',
        idade_cad_3: '',
        nascimento_cad_4: '',
        sus_cad_5: '',
        endereco_cad_6: '',
        informante_cad_7: '',
        bairro_cad_8: '',
        cep_cad_9: '',
        cidadeUf_cad_10: '',
        mae_cad_11: '',
        nascimentoMae_cad_12: '',
        profissaoMae_cad_13: '',
        pai_cad_14: '',
        nascimentoPai_cad_15: '',
        profissaoPai_cad_16: '',
        estadoCivilSelecionado_cad_17: 'casados',
        idadeSeparacao_cad_18: '',
        guardaSelecionada_cad_19: 'mãe',
        padrastoMadrasta_cad_20: '',
        motivo_cad_21: '',
        guardiao_cad_22: '',
        guardiaoLegalSelecionado_cad_23: 'pais adotivos'
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

    const formatarData = (texto, callback, key) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        if (textoFiltrado.length >= 5) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4) + '/' + textoFiltrado.substring(4,8)
        } else if (textoFiltrado.length >= 3) {
            textoFiltrado = textoFiltrado.substring(0, 2) + '/' + textoFiltrado.substring(2, 4)
        }
        callback({...dados, [key]: textoFiltrado})
    }

    const formatarCep = (texto) => {
        let textoFiltrado = texto.replace(/\D/g,'')
        if (textoFiltrado.length > 5) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2,5)}-${textoFiltrado.substring(5,8)}`
        } else if(textoFiltrado.length > 2) {
            textoFiltrado = `${textoFiltrado.substring(0,2)}.${textoFiltrado.substring(2)}`
        }

        setDadosLocal({...dados, cep_cad_9: textoFiltrado})
    }

    const formatarSus = (texto) => {
        let textoFiltrado = texto.replace(/\D/g, '')
        textoFiltrado = textoFiltrado.match(/.{1,4}/g)?.join(' ') || textoFiltrado
        setDadosLocal({...dados, sus_cad_5: textoFiltrado})
    }

    const generateIdade = () => {
        if (!dados.nascimento_cad_4) return;

        const partesData = dados.nascimento_cad_4.split('/');
        if (partesData.length !== 3) return;

        const dataNascimento = new Date(`${partesData[2]}-${partesData[1]}-${partesData[0]}`);
        const hoje = new Date();

        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade -= 1;
        }

        setDadosLocal({ ...dados, idade_cad_3: idade });
    }
    
    useEffect(() => {
        generateIdade()
    }, [dados.nascimento_cad_4])

    useEffect(() => {
        setData(dados);
    }, [dados]);

    return (
            <View style={styles.container}>
                <View>
                    <Text>Data:</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, width: '40%', textAlign: 'center', height: 40}} 
                        onChangeText={texto=>formatarData(texto, setDadosLocal, 'data_cad_1')}
                        placeholder='DD/MM/AAAA'
                        value={dados.data_cad_1}
                    />
                </View>
            <Text style={styles.titulo}>1. Dados de Identificação</Text>
            <Text>Nome completo:</Text>
            <TextInput
                placeholder={dados.nome_cad_2}
                style={styles.input}
                onChangeText={newText => setDadosLocal({...dados, nome_cad_2: newText})}
            />
            <Text>Data de nascimento:</Text>
            <TextInput
                style={styles.input}
                placeholder='DD/MM/AAAA'
                onChangeText={texto=>formatarData(texto, setDadosLocal, 'nascimento_cad_4')}
                value={dados.nascimento_cad_4}
            />
            
            
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 30}}>
            <Text>Idade:</Text>
            <Text style={{borderWidth: 1, borderRadius: 3, padding: 5}}>
                {dados.idade_cad_3 ? dados.idade_cad_3 : '0'}
            </Text>
            </View>
            <Text>Nº SUS:</Text>
            <TextInput
                value={dados.sus_cad_5}
                style={styles.input}
                placeholder='___ ___ ___ ___'
                onChangeText={formatarSus}
                maxLength={19}
                keyboardType="numeric"
            />
            <Text>Endereço:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, endereco_cad_6: newText})}
                value={dados.endereco_cad_6}
            />
            <Text>Bairro:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, bairro_cad_8: newText})}
                value={dados.bairro_cad_8}
            />
            <Text>CEP:</Text>
            <TextInput
                style={styles.input}
                onChangeText={formatarCep}
                value={dados.cep_cad_9}
            />
            <Text>Cidade/UF:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, cidadeUf_cad_10: newText})}
                value={dados.cidadeUf_cad_10}
            />
            <Text>Informante:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setDadosLocal({...dados, informante_cad_7: newText})}
                value={dados.informante_cad_7}
            />
            <Text>Dados da mãe:</Text>
            <TextInput
                style={styles.input}
                onChangeText={newText => setDadosLocal({...dados, mae_cad_11: newText})}
                value={dados.mae_cad_11}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setDadosLocal, 'nascimentoMae_cad_12')}
                value={dados.nascimentoMae_cad_12}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={dados.profissaoMae_cad_13}
                onChangeText={newText => setDadosLocal({...dados, profissaoMae_cad_13: newText})}
                placeholder='Profissão'
            />
            <Text>Dados do pai:</Text>
            <TextInput
                style={styles.input}
                onChangeText={newText => setDadosLocal({...dados, pai_cad_14: newText})}
                value={dados.pai_cad_14}
                placeholder='Nome'
            />
            <TextInput
                style={styles.input}
                onChangeText={texto=>formatarData(texto, setDadosLocal, 'nascimentoPai_cad_15')}
                value={dados.nascimentoPai_cad_15}
                placeholder='Data de nascimento'
            />
            <TextInput
                style={styles.input}
                value={dados.profissaoPai_cad_16}
                onChangeText={newText => setDadosLocal({...dados, profissaoPai_cad_16: newText})}
                placeholder='Profissão'
            />
            <Text>Estado civil dos pais:</Text>
            <Seletor
                selecionado={dados.estadoCivilSelecionado_cad_17}
                aoMudar={value=>setDadosLocal({...dados, estadoCivilSelecionado_cad_17: value})}
                lista={estadoCivil}
            />
            {dados.estadoCivilSelecionado_cad_17 === 'separados' || dados.estadoCivilSelecionado_cad_17 === 'divorciados'
            ? <View style={{gap: 10}}>
                <Text>Que idade a criança tinha quando os pais se separaram?</Text>
                <TextInput
                    style={styles.input}
                    value={dados.idadeSeparacao_cad_18}
                    onChangeText={newText=>setDadosLocal({...dados, idadeSeparacao_cad_18: newText})}
                />
                <Text>Quem tem a guarda da criança?</Text>
                <Seletor
                    selecionado={dados.guardaSelecionada_cad_19}
                    aoMudar={value=>setDadosLocal({...dados, guardaSelecionada_cad_19: value})}
                    lista={guarda}
                />
                {dados.guardaSelecionada_cad_19 !== 'outro'
                ? <View style={{gap: 10}}>
                    <Text>Qual o nome do padrasto/madrasta?</Text>
                    <TextInput
                    style={styles.input}
                    value={dados.padrastoMadrasta_cad_20}
                    onChangeText={newText => setDadosLocal({...dados, padrastoMadrasta_cad_20: newText})}
                    />
                </View>
                :<View style={{gap: 10}}>
                    <Text>Qual o motivo?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.motivo_cad_21}
                        onChangeText={newText=>setDadosLocal({...dados, motivo_cad_21: newText})}
                    />
                    <Text>Quem possui a guarda legal?</Text>
                    <Seletor
                        selecionado={dados.guardiaoLegalSelecionado_cad_23}
                        aoMudar={value=>setDadosLocal({...dados, guardiaoLegalSelecionado_cad_23: value})}
                        lista={guardiaoLegal}
                    />
                    <TextInput
                        style={styles.input}
                        value={dados.guardiao_cad_22}
                        onChangeText={newText=>setDadosLocal({...dados, guardiao_cad_22: newText})}
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