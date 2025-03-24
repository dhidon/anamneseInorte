import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import MultiplaEscolha from "./MultiplaEscolha";
import Seletor from "./Seletor";

export default function SaudeGeral( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        condicoesSelecionadas:[],
        fatoresDifSelecionados:[],
        usoMedicacaoSelecionado: '',
        qualMedicacao: '',
        motivoMedicacao: '',
        quemReceitouMedicacao: ''
    })

    const condicoes = [
        { label: 'Oites', value: 'oites' },
        { label: 'Sarampo', value: 'sarampo' },
        { label: 'Rubéola', value: 'rubeola' },
        { label: 'Caxumba', value: 'caxumba' },
        { label: 'Catapora', value: 'catapora' },
        { label: 'Coqueluche', value: 'coqueluche' },
        { label: 'Difteria', value: 'difteria' },
        { label: 'Meningite', value: 'meningite' },
        { label: 'Pneumonia', value: 'pneumonia' },
        { label: 'Encefalite', value: 'encefalite' },
        { label: 'Febre alta', value: 'febreAlta' },
        { label: 'Convulsão', value: 'convulsao' },
        { label: 'Alergia', value: 'alergia' },
        { label: 'Ferimentos na cabeça', value: 'ferimentosCabeca' },
        { label: 'Fraturas', value: 'fraturas' },
        { label: 'Hospitalizações', value: 'hospitalizacoes' },
        { label: 'Cirurgias', value: 'cirurgias' },
        { label: 'Paralisias', value: 'paralisias' },
        { label: 'Perda de consciência', value: 'perdaConsci' },
        { label: 'Envenenamento', value: 'envenenamento' },
        { label: 'Dores de cabeça severas', value: 'dorCabecaSev' },
        { label: 'Febre reumática', value: 'febreReumatica' },
        { label: 'Tuberculose', value: 'tuberculose' },
        { label: 'Doenças ósseas ou articulares', value: 'doencOsseasArtic' },
        { label: 'ISTs', value: 'ists' },
        { label: 'Anemia', value: 'anemia' },
        { label: 'Icterícia', value: 'ictericia' },
        { label: 'Diabetes', value: 'diabetes' },
        { label: 'Câncer', value: 'cancer' },
        { label: 'Hipertensão arterial', value: 'hipertensaoArterial' },
        { label: 'Doença cardíaca', value: 'doencaCardiaca' },
        { label: 'Hemorragia', value: 'hemorragia' },
        { label: 'Eczemas ou picadas', value: 'eczemasOuPicadas' },
        { label: 'Abuso físico', value: 'abusoFisico' },
        { label: 'Abuso sexual', value: 'abusoSexual' },
        { label: 'Hepatite', value: 'hepatite' }
    ]

    const fatoresDif = [
        { label: 'Doenças', value: 'doencas' },
        { label: 'Mortes', value: 'mortes' },
        { label: 'Cirurgias', value: 'cirurgiasContriDif' },
        { label: 'Acidentes', value: 'acidentes' },
        { label: 'Separações', value: 'separacoes' },
        { label: 'Divórcio dos pais', value: 'divorcioPais' },
        { label: 'Mudança de emprego dos pais', value: 'mudancaEmprego' },
        { label: 'Troca de escola', value: 'trocaEscola' },
        { label: 'Mudança da família', value: 'mudancaFamilia' },
        { label: 'Dificuldades financeiras', value: 'difFinanceiras' },
        { label: 'Novo casamento', value: 'novoCasamento' },
        { label: 'Trauma sexual', value: 'traumaSexual' },
        { label: 'Outras perdas', value: 'outrasPerdas' },
        { label: 'Bullying', value: 'bullying' },
        { label: 'Outro fator na escola', value: 'outroFatorEscola' },
    ]

    const simOuNao = [
        {label: 'Sim', value: 'sim'},
        {label: 'Não', value: 'não'}
    ]

    useEffect(()=>{
        setDados(dados)
    }, [dados])
    return (
        <View>
            <Text>SAÚDE GERAL</Text>
            <MultiplaEscolha
                titulo='Marque as condições e doenças que seu filho já teve'
                lista={condicoes}
                grupo={dados}
                callback={setDadosLocal}
                chave='condicoesSelecionadas'
            />
            <Text>ATUALMENTE</Text>
            <MultiplaEscolha
                titulo='Quais fatores você acha que podem contribuir para as dificuldades do seu filho?'
                lista={fatoresDif}
                grupo={dados}
                callback={setDadosLocal}
                chave='fatoresDifSelecionados'
            />
            <Text>MEDICAÇÃO</Text>
            <Text>Faz uso de alguma medicação?</Text>
            <Seletor
                selecionado={dados.usoMedicacaoSelecionado}
                lista={simOuNao}
                aoMudar={value=>setDadosLocal({...dados, usoMedicacaoSelecionado: value})}
            />
            {dados.usoMedicacaoSelecionado === 'sim'
            ?<View>
                <TextInput
                    style={styles.input}
                    value={dados.qualMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, qualMedicacao: newText})}
                    placeholder='Qual medicação?'
                />
                <TextInput
                    style={styles.input}
                    value={dados.motivoMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, motivoMedicacao: newText})}
                    placeholder="Qual o motivo do uso dessa medicação?"
                />
                <TextInput
                    style={styles.input}
                    value={dados.quemReceitouMedicacao}
                    onChangeText={newText=>setDadosLocal({...dados, quemReceitouMedicacao: newText})}
                    placeholder="Quem receitou esta medicação?"
                />
            </View>
            :null}

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