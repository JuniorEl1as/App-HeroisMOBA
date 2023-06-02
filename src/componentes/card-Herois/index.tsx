import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ParametroRota } from '../../../routes';
 

type PropsNavegacao = StackNavigationProp<ParametroRota, "Home">

type PropsDaTela = {
    navigation: PropsNavegacao,
}

export default function CardHeroi({ value }: any) {

    const navigation = useNavigation<PropsNavegacao>();


    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("DescricaoHeroi", value)}>
            <View style={styles.card}>
                <Image style={styles.imagem} source={{ uri: value.imagem }} />
                <Text>{value.nome}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15, 
        width: 100
    },
    card: {
        alignItems: 'center',
    },
    imagem: {
        width: 100,
        height: 100,
    }
})