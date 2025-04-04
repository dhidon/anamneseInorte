import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert, Platform, Dimensions, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Print from 'expo-print'

import Header from "../../components/Header";

export default function Profissionais( {route} ) {
    const {dadosTotais} = route.params
    const navigation = useNavigation()
    
    const [anamneseRealizada, setAnamneseRealizada] = useState('')
    const [tecnico, setTecnico] = useState('')

    const dadosPaciente = {
        ...dadosTotais,
        anamneseRealizada,
        tecnico
    }

    const larguraTela = Dimensions.get("window").width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    const gerarPDF = async () => {
        try {
            const htmlContent = `
                <html>
                    <head>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                            line-height: 1.6
                            }
                        h1 {
                            text-align: center;
                            color: #333;
                            }
                        h2 {
                            margin-top: 20px;
                            color: #555
                        }
                        .section {
                        font-weight: bold;
                        }
                        .label {
                            font-weight: bold;
                        }
                        .value {
                            margin-left: 10px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 20px;
                        }
                        th, dh {
                            border: 1px solid #ddd
                            padding: 8px;
                            text-align: left;
                        }
                        th {
                            background-color: #f2f2f2
                        }
                    </head>
                    <body>
                        <h1>Relatório do paciente<h1>
                        <div class="section">
                            <h2>Dados Gerais</h2>
                            <p><span class="label">Anamnese realizada com:</span><span class="value"> ${anamneseRealizada}</span></p>
                            <p><span class="label">Técnico responsável:</span><span class="value"> ${tecnico}</span></p>
                        </div>
                        <div class="section">
                            <h2>Dados do paciente:</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Campo</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${
                                        Object.entries(dadosTotais).map(
                                            ([key, value]) => `
                                            <tr>
                                                <td>${key}</td>
                                                <td>${value}</td>
                                            </tr>
                                            `
                                        ).join("")
                                    }
                                </tbody>
                            </table>
                        </div>
                    </body>
                </html>
            `

            const { uri } = await Print.printToFileAsync( { html: htmlContent} )

            Alert.alert('PDF Gerado', `O PDF foi salvo em: ${uri}`)
            console.log('PDF gerado em:', uri)
        } catch(error) {
            console.error('Erro ao gerar PDF:', error)
            Alert.alert('Erro', 'Não foi possível gerar o PDF')
        }
    }

    const subirDados = async () => {
        if (!anamneseRealizada || !tecnico) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        
        console.log('Dados a serem enviados:', dadosPaciente);

        await gerarPDF()

        Alert.alert(
            'Sucesso',
            'Dados enviados com sucesso!',
            [
                {
                    text: 'Voltar para o início',
                    onPress: () => navigation.navigate('Home'),
                    style: 'cancel'
                },
            ],
            { cancelable: true }
        );
    };
    

    return (
        <View style={ehDesktop ? styles.desktopContainer : styles.mobileContainer}>
            <Header/>
            <Text>Anamnese realizada com:</Text>
            <TextInput
                style={styles.input}
                value={anamneseRealizada}
                onChangeText={newText=>setAnamneseRealizada(newText)}
            />
            <Text>Técnico:</Text>
            <TextInput
                style={styles.input}
                value={tecnico}
                onChangeText={newText=>setTecnico(newText)}
            />
            <Button title='Enviar dados do paciente' onPress={() => subirDados()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    desktopContainer: {
        marginTop: 10,
        gap: 10,
        padding: 150,
        width: '50%',
        alignSelf: 'center',
    },
    mobileContainer: {
        gap: 10,
        flex: 1,
        margin: 10
    },
    input : {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    }
})