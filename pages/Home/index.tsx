import React, { useContext, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, View, StyleSheet, Text, ScrollView, Appearance } from 'react-native';
import { AuthContext, Heroi } from '../../context';
import HeroisDescricao from '../../services/descricaoHerois.json'
import CardHeroi from '../../src/componentes/card-Herois';
import { ParametroRota } from '../../routes';
import { StackNavigationProp } from '@react-navigation/stack';
import CardHeroiFiltro from '../../src/componentes/cardHeroiFiltro';
import Filtros from '../../src/componentes/filtros';
import Menu from '../../src/componentes/botaoTema';

type PropsNavegacao = StackNavigationProp<ParametroRota, "Home">

type PropsDaTela = {
    navigation: PropsNavegacao,
}

export default function Home({ navigation }: PropsDaTela) {
    const { categoriaHerois, corFundo, setCorFundo }: any = useContext(AuthContext);

    const Atirador = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Atiradores")
    const Assassino = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Assassino")
    const Lutador = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Lutador")
    const Mago = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Magos")
    const Suporte = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Suporte")
    const Tank = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Tanks")

    const filtro = HeroisDescricao.filter((tag) => tag.tag === categoriaHerois )

    console.log(`teste ${filtro}`);

    return (
        <SafeAreaView style={{ backgroundColor: corFundo, height: "100%" }}>
            <StatusBar />
            
            <Menu />

            <View>
                <Filtros />
            </View>

            {filtro.length > 0 ?

                <FlatList
                    data={filtro}
                    keyExtractor={(Heroi: Heroi) => Heroi.id}
                    renderItem={({ item }) => <CardHeroiFiltro value={item} />}
                />

                :

                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.titulos}>Atirador</Text>
                        <FlatList
                            horizontal={true}
                            data={Atirador}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} navigation={navigation} />}
                        />

                        <Text style={styles.titulos}>Assassino</Text>
                        <FlatList
                            horizontal={true}
                            data={Assassino}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} />}
                        />

                        <Text style={styles.titulos}>Lutador</Text>
                        <FlatList
                            horizontal={true}
                            data={Lutador}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} />}
                        />

                        <Text style={styles.titulos}>Mago</Text>
                        <FlatList
                            horizontal={true}
                            data={Mago}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} />}
                        />

                        <Text style={styles.titulos}>Suporte</Text>
                        <FlatList
                            horizontal={true}
                            data={Suporte}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} />}
                        />

                        <Text style={styles.titulos}>Tank</Text>
                        <FlatList
                            horizontal={true}
                            data={Tank}
                            keyExtractor={(Heroi: Heroi) => Heroi.id}
                            renderItem={({ item }) => <CardHeroi value={item} />}
                        />
                    </View>
                </ScrollView>}



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginBottom: 50
    },
    titulos: {
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 15,
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
    },
   
})