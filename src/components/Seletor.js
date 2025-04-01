import React from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Seletor({selecionado, aoMudar, lista}) {
    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'
    
    return (
        <View>
            <Picker
                style={ehDesktop?styles.desktopPicker:styles.mobilePicker}
                selectedValue={selecionado}
                onValueChange={aoMudar}
                mode='dropdown'
            >
                {lista.map((item, index) => {
                    return <Picker.Item key={index} value={item.value} label={item.label}/>
                })}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    mobilePicker: {
        height: 50,
        width: '100%', 
        borderRadius: 8, 
        borderWidth: 1, 
        justifyContent: 'center', 
        marginTop: 5, 
        marginBottom: 10
    },
    desktopPicker: {
        height: 40,
        width: '100%', 
        borderRadius: 8, 
        borderWidth: 1, 
        justifyContent: 'center', 
        marginTop: 5, 
        marginBottom: 10
    }
})