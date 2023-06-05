import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import OpcaoMenu from '../opcao-menu';

export default function Menu() {

    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <OpcaoMenu titulo="Todos" />
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