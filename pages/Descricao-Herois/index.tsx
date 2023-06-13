import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ParametroRota } from '../../routes';
import { AuthContext } from '../../context';
import { Ionicons } from '@expo/vector-icons';

type PropsNavegacao2 = StackNavigationProp<ParametroRota, "DescricaoHeroi">

type RouteProps = RouteProp<ParametroRota, "DescricaoHeroi">

type PropsDaTela2 = {
    navigation: PropsNavegacao2,
    route: RouteProps,
}

export default function DescricaoHeroi({ route }: PropsDaTela2) {
    const {corFundo }: any = useContext(AuthContext);
    const { nome, imagem, id, tag, todos, bio, skills } = route.params

    return (
        <ScrollView style={{backgroundColor: corFundo}}>
            <View style={styles.container}>

                <View style={styles.secaoVoltarNome}>
                    <Ionicons name="arrow-back-circle" size={24} color="white" />
                    <Text style={styles.titulo}>{nome}</Text>
                </View>
               

                <View style={styles.cardCategoria}>
                    <Text style={styles.textos}>Categoria: </Text>
                    <Text style={styles.textos}>{tag}</Text>
                </View>

                <Image style={{ height: 200, width: "100%" }} source={{ uri: imagem }} />

                <Text style={styles.bio}>{bio}</Text>

                <Image style={{ height: 250 }} source={{ uri: skills }} />

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 10,
        color: "white",
    },
    cardCategoria: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row",
    },
    textos: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
    },
    bio: {
        fontSize: 15,
        marginBottom: 20,
        marginTop: 10,
        color: "white",
    },
    secaoVoltarNome: {
        flexDirection: "row",
        alignItems: "baseline",
        height: "10%",
    }
})