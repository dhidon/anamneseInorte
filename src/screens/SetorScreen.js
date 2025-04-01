import React, {useState} from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Seletor from '../components/Seletor'

export default function SetorScreen() {
    const [departamentoSelecionado, setDepartamentoSelecionado] = useState([0])
    const navigation = useNavigation()

    const departamentos = [
        {label: 'Selecione um departamento', value: null},
        {label: 'Anamnese', value: 'anamnese'},
        {label: 'Enfermagem', value: 'enfermagem'},
        {label: 'Assistência social', value:'assistencia'},
        {label: 'Cadastro', value: 'cadastro'}
    ]

    const handleSetor = () => {
        switch(departamentoSelecionado){
            case 'anamnese':
                navigation.navigate('Identificação')
                break
            default:
                alert('Selecione um departamento')

        }
    }

    return (
        <View style={styles.container}>
            <Text>Qual departamento você quer acessar?</Text>
            <Seletor
                selecionado={departamentoSelecionado}
                aoMudar={value=>setDepartamentoSelecionado(value)}
                lista={departamentos}
            />
            <Button
                title='Próximo'
                onPress={handleSetor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderWidth: 2,
        borderRadius: 8,
        alignSelf: 'center',
        width: 400,
        marginVertical: 90
    }
})