import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MultiplaEscolha({lista, callback, grupo, titulo, chave}) {
    const alternarSelecao = (id)=>{
        const arrayAtual = grupo[chave] || [];
        const novoGrupo = arrayAtual.includes(id)
            ? arrayAtual.filter(opcao => opcao !== id)
            : [...arrayAtual, id];
        callback({...grupo, [chave]: novoGrupo});
        grupo.lista.map( op => {
            if(op === 'não') {
                callback({...grupo, [chave.op]: 'sim'})
            } else {
                callback({...grupo, [chave.op]: 'não'})
            }
        })
    }

    return (
        <View>
            <Text style={{textAlign: 'justify', marginBottom: 10}}>{titulo}</Text>
            {lista.map((opcao) => (
                <TouchableOpacity
                    key={opcao.value}
                    style={styles.checkboxContainer}
                    onPress={() => alternarSelecao(opcao.value)}
                >
                    <View
                        style={[
                            styles.checkbox,
                            (grupo[chave] || []).includes(opcao.value) && styles.checkboxSelected,
                        ]}
                    />
                    <Text style={styles.label}>{opcao.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
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