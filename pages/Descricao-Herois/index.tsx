import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { ParametroRota } from '../../routes';

type PropsNavegacao2 = StackNavigationProp<ParametroRota, "DescricaoHeroi">

type RouteProps = RouteProp<ParametroRota, "DescricaoHeroi">

type PropsDaTela2 = {
    navigation: PropsNavegacao2,
    route: RouteProps,
}

export default function DescricaoHeroi({ route }: PropsDaTela2) {
    const { nome, imagem, id, tag, todos, bio, skills } = route.params

    console.log(skills);

    return (
        <View style={{ padding: 10 }}>

            <Text>{nome}</Text>
            <Image style={{ height: 200, width: "100%" }} source={{ uri: imagem }} />
            <Text>{tag}</Text>
            <Text>{bio}</Text>
            <Image style={{ height: 200, width: "100%" }} source={{ uri: skills }} />

        </View>
    )
}