import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../../context';

type Props = {
    titulo: string;
}

export default function OpcaoMenu({ titulo }: Props) {
    const { setCategoriaHerois, categoriaHerois }: any = useContext(AuthContext);
    const [opacidade, setOpacidade] = useState<string>("#e7ce0e")

    function capturarCategoria(titulo: string) {
        setCategoriaHerois(titulo);

        if (categoriaHerois === "todos") {
            setCategoriaHerois("")
        }
    }

    return (
        <View style={{
            margin: 5,
            backgroundColor: opacidade,
            borderRadius: 10,
        }} >

            <TouchableOpacity style={styles.botao} onPress={() => capturarCategoria(titulo)} >
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
        backgroundColor: "#e7ce0e",
        borderRadius: 10,
    },
    botao: {
        width: 90,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    texto: {
        color: "#000",
        fontStyle: "italic",
        fontSize: 16,
        fontWeight: "bold",
    }
})