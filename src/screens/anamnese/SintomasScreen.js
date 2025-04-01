import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Platform, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SintomasScreen( {route} ) {
    const navigation = useNavigation()
    const {dados} = route.params

    const [dadosSintomas, setDadosLocal] = useState({
        motivo_cg_1: '',
        profissionais_cg_2: '',
        convive_cg_3: '',
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
        ]
    })
    const [dadosIdSint, setDadosIdSint] = useState({...dados, ...dadosSintomas})

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDadosIdSint({
            ...dados,
            ...dadosSintomas
        })
    }, [dadosSintomas])

    return (
        <ScrollView>
        <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
            <Text style={{fontWeight: 'bold'}}>2. SINTOMAS</Text>
            <Text>Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
            <TextInput
                style={styles.input}
                value={dadosSintomas.motivo}
                onChangeText={newText=>setDadosLocal({...dadosSintomas, motivo: newText})}
            />
            <Text>Que profissionais estão fazendo o acompanhamento?</Text>
            <TextInput
                style={styles.input}
                value={dadosSintomas.profissionais}
                onChangeText={newText=>setDadosLocal({...dadosSintomas, profissionais: newText})}
            />
            <Text>Com quem o adolescente passa mais tempo?</Text>
            <TextInput
                style={styles.input}
                value={dadosSintomas.convive}
                onChangeText={newText=>setDadosLocal({...dadosSintomas, convive: newText})}
            />
            <Text>Pressione as condições ou doenças que algum membro da família (pais, irmãos, tias, tios, primos, avós) já teve. Anote o grau de parentesco com a criança</Text>
            {dadosSintomas.condicoes.map((item, index)=>
                <TouchableOpacity key={index} onPress={() => {
                    const newCondicoes = [...dadosSintomas.condicoes];
                    newCondicoes[index].value = item.value === 'não' ? 'sim' : 'não';
                    setDadosLocal({...dadosSintomas, condicoes: newCondicoes});
                }}>
                     <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                            <Text>{item.label}</Text>
                            <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                        </View>
                        {item.value === 'sim'
                        ?<TextInput
                            placeholder='Qual o parentesco?'
                                style={[styles.input, {marginTop: 7}]}
                                value={item.parentesco}
                                onChangeText={newText=>setDadosLocal({
                                ...dadosSintomas,
                                condicoes: dadosSintomas.condicoes.map((item, i) => 
                                i === index ? { ...item, parentesco: newText } : item)})}
                        />
                        :null
                        }
                    </View>
                </TouchableOpacity>
            )}

            <Text style={styles.title}>A qual grupo pertence o paciente que você está atendendo?</Text>
            <Button title='Adolescentes' onPress={()=> navigation.navigate('Histórico - Adolescente', {dadosIdSint})}/>
            <Button title='Crianças' onPress={()=> navigation.navigate('Histórico - Crianças', {dadosIdSint})}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    mobileContainer: {
        gap: 10,
        flex: 1,
        margin: 10
    },
    label: {
        fontSize: 16,
    },
    title:{
        textAlign: 'justify',
        fontSize: 16,
        marginTop: 40
    },
    desktopContainer: {
        marginTop: 10,
        gap: 10,
        padding: 150,
        width: '50%',
        alignSelf: 'center',
    },
    mobileInput: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})