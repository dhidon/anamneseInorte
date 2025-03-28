import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";

export default function Sintomas( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        condicoes: [
            {id: 'autismo_cg_21', label: 'Autismo', value: 'não', parentesco: ''},
            {id: 'defictAtencao_cg_22', label: 'Déficit de atenção', value: 'não', parentesco: ''},
            {id: 'convulsaoEpilepsia_cg_23', label: 'Convulsão ou epilepsia', value: 'não', parentesco: ''},
            {id: 'hiperatividade_cg_24', label: 'Hiperatividade', value: 'não', parentesco: ''},
            {id: 'difAprend_cg_25', label: 'Dificuldades de aprendizagem', value: 'não', parentesco: ''},
            {id: 'defIntelectual_cg_26', label: 'Deficiência intelectual', value: 'não', parentesco: ''},
            {id: 'tiques_cg_27', label: 'Tiques ou Síndrome de Tourette', value: 'não', parentesco: ''},
            {id: 'abusoAlcool_cg_28', label: 'Abuso de álcool', value: 'não', parentesco: ''},
            {id: 'usoDrogas_cg_29', label: 'Uso de drogas', value: 'não', parentesco: ''},
            {id: 'tentativaSuicidio_cg_30', label: 'Tentativa de suicídio', value: 'não', parentesco: ''},
            {id: 'abusoFisico_cg_31', label: 'Abuso físico', value: 'não', parentesco: ''},
            {id: 'probCompInfancia_cg_32', label: 'Problemas comportamentais na infância', value: 'não', parentesco: ''},
            {id: 'doencaMental_cg_33', label: 'Doença mental', value: 'não', parentesco: ''},
            {id: 'depressaoAnsiedade_cg_34', label: 'Depressão ou ansiedade', value: 'não', parentesco: ''},
            {id: 'abusoSexual_cg_35', label: 'Abuso sexual', value: 'não', parentesco: ''},
            {id: 'doencaNeurologica_cg_36', label: 'Doença ou enfermidade neurológica', value: 'não', parentesco: ''}
        ],
        motivo: '',
        profissionais: '',
        convive: ''
    })

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>2. Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
            <TextInput
                style={styles.input}
                value={dados.motivo}
                onChangeText={newText=>setDadosLocal({...dados, motivo: newText})}
            />
            <Text>Que profissionais estão fazendo o acompanhamento?</Text>
            <TextInput
                style={styles.input}
                value={dados.profissionais}
                onChangeText={newText=>setDadosLocal({...dados, profissionais: newText})}
            />
            <Text>Com quem o adolescente passa mais tempo?</Text>
            <TextInput
                style={styles.input}
                value={dados.convive}
                onChangeText={newText=>setDadosLocal({...dados, convive: newText})}
            />
            <Text>Pressione as condições ou doenças que algum membro da família (pais, irmãos, tias, tios, primos, avós) já teve. Anote o grau de parentesco com a criança</Text>
            {dados.condicoes.map((item, index)=>
                <TouchableOpacity key={index} onPress={() => {
                    const newCondicoes = [...dados.condicoes];
                    newCondicoes[index].value = item.value === 'não' ? 'sim' : 'não';
                    setDadosLocal({...dados, condicoes: newCondicoes});
                }}>
                     <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>{item.label}</Text>
                            <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                        </View>
                        {item.value === 'sim'
                        ?<TextInput
                            placeholder='Qual o parentesco?'
                                style={styles.input}
                                value={item.parentesco}
                                onChangeText={newText=>setDadosLocal({
                                ...dados,
                                condicoes: dados.condicoes.map((item, i) => 
                                i === index ? { ...item, parentesco: newText } : item)})}
                        />
                        :null
                        }
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    container: {
        gap: 10,
        flex: 1
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#444",
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: "#4CAF50",
    },
    label: {
        fontSize: 16,
    }
})