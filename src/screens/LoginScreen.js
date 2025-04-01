import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loginVisible, setLoginVisible] = useState(false);
    const [newUserVisible, setNewUserVisible] = useState(false);
    const [newUser, setNewUser] = useState('');
    const [newSenha, setNewSenha] = useState('');

    const credenciais = [
        { usuario: '', senha: '' }
    ];

    const efetuarLogin = () => {
        if (credenciais.find(c => c.usuario === usuario && c.senha === senha)) {
            navigation.navigate('Identificação');
        } else {
            alert('Usuário ou senha inválidos');
        }
        setLoginVisible(false);
    };

    const addUser = () => {
        credenciais.push({ usuario: newUser, senha: newSenha });
        setNewUserVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../images/logo-card.png')} style={styles.logo}/>
            <Button title='Fazer login' onPress={() => setLoginVisible(true)} />
            <Button title='Criar novo usuário' onPress={() => setNewUserVisible(true)} />
            <Modal
                visible={loginVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Usuário:</Text>
                        <TextInput
                            style={styles.input}
                            value={usuario}
                            onChangeText={newText => setUsuario(newText)}
                        />
                        <Text>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            value={senha}
                            onChangeText={newText => setSenha(newText)}
                            secureTextEntry={true}
                            onSubmitEditing={() => efetuarLogin()}
                        />
                        <Button title='Entrar' onPress={() => efetuarLogin()} />
                        <Button title='Fechar' onPress={() => setLoginVisible(false)} />
                    </View>
                </View>
            </Modal>
            <Modal
                visible={newUserVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Usuário:</Text>
                        <TextInput
                            style={styles.input}
                            value={newUser}
                            onChangeText={newText => setNewUser(newText)}
                        />
                        <Text>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            value={newSenha}
                            onChangeText={newText => setNewSenha(newText)}
                            secureTextEntry={true}
                            onSubmitEditing={() => addUser()}
                        />
                        <Button title='Adicionar novo usuário' onPress={() => addUser()} />
                        <Button title='Fechar' onPress={() => setNewUserVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        width: 200,
        marginBottom: 10,
        paddingHorizontal: 10
    },
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        gap: 10
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        gap: 10
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 50
    }
});