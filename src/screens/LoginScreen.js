import React, {useState} from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigation = useNavigation()

    const credenciais = [
        {usuario: 'user', senha: '1234'}
    ]

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarLogin = () => {
        if (credenciais.find(c=>c.usuario === usuario && c.senha === senha)) {
            navigation.navigate('Home')
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Usuário:</Text>
            <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={newText=>setUsuario(newText)}
            />
            <Text>Senha:</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={newText=>setSenha(newText)}
            />
            <Button title='Entrar' onPress={()=>efetuarLogin()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        width: 100,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
})