import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ParametroRota } from '../../../routes';
 
type PropsNavegacao = StackNavigationProp<ParametroRota, "Home">

type PropsDaTela = {
    navigation: PropsNavegacao,
}

export default function CardHeroiFiltro({ value }: any) {
    const navigation = useNavigation<PropsNavegacao>();


    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("DescricaoHeroi", value)}>
            <View style={styles.card}>
                <Image style={styles.imagem} source={{ uri: value.imagem }} />
                <Text style={styles.text}>{value.nome}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        borderColor: "transparent",
        marginTop: 15,
        marginBottom: 10,
        marginLeft: "5%",
        elevation: 3,
        width: "90%",
    },
    card: {
        alignItems: 'center',
        backgroundColor: "#e7ce0e",
        borderRadius: 10,
    },
    imagem: {
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    text: {
        margin: 10,
        fontSize: 16,
        fontWeight: "bold"
    }
})