import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OpcaoMenu from '../opcao-menu';
import { AuthContext, Heroi } from '../../../context';
import herois from '../../../services/descricaoHerois.json'

export default function Filtros() {
    const { categoriaHerois, corFundo, setCorFundo }: any = useContext(AuthContext);
    const [tags, setTags] = useState<[]>()

    const Tags = ["Todos", "Atiradores", "Assassino", "Lutador", "Magos", "Suporte", "Tanks"]

    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <OpcaoMenu titulo="Todos"/>
                <OpcaoMenu titulo="Atiradores" />
                <OpcaoMenu titulo="Assassino" />
                <OpcaoMenu titulo="Lutador" />
                <OpcaoMenu titulo="Magos" />
                <OpcaoMenu titulo="Suporte" />
                <OpcaoMenu titulo="Tanks" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    }
})