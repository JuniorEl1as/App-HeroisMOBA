import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../../context';

type Props = {
    titulo: string;
}

export default function OpcaoMenu ( {titulo}: Props ) {
    const {setCategoriaHerois, categoriaHerois}: any = useContext(AuthContext);

    function capturarCategoria(titulo: string) {
        setCategoriaHerois(titulo);

        if(categoriaHerois === "todos"){
            setCategoriaHerois("")
        }
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao} onPress={() => capturarCategoria(titulo)}>
                <Text style={styles.texto}>
                    {titulo}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    botao: {
        width: 90,
        height: 50,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    texto: {
        color: "#fff",
        fontStyle: "italic",
    }
})