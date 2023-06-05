import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StatusBar, View, StyleSheet, Text, ScrollView } from 'react-native';
import Menu from '../../src/componentes/menu';
import { AuthContext, Heroi } from '../../context';
import HeroisDescricao from '../../services/descricaoHerois.json'
import CardHeroi from '../../src/componentes/card-Herois';
import { ParametroRota } from '../../routes';
import { StackNavigationProp } from '@react-navigation/stack';

type PropsNavegacao = StackNavigationProp<ParametroRota, "Home">

type PropsDaTela = {
    navigation: PropsNavegacao,
}

export default function Home({ navigation }: PropsDaTela) {
    const { categoriaHerois }: any = useContext(AuthContext);

    console.log(categoriaHerois);

    const Atirador = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Atiradores")
    const Assassino = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Assassino")
    const Lutador = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Lutador")
    const Mago = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Magos")
    const Suporte = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Suporte")
    const Tank = HeroisDescricao.filter((heroi: Heroi) => heroi.tag === "Tanks")

    const filtro = HeroisDescricao.filter((tag) => tag.tag === categoriaHerois)
    console.log(filtro);
    
    return (
        <SafeAreaView>
            <StatusBar />
            <View>
                <Menu />
            </View>

            { filtro.length > 0 ? 

            <FlatList
                data={filtro}
                keyExtractor={(Heroi: Heroi) => Heroi.id}
                renderItem={({ item }) => <CardHeroi value={item} />}
            /> 
            
            : 
            
            <ScrollView>
                <View style={styles.container}>

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Atirador</Text>
                    <FlatList
                        horizontal={true}
                        data={Atirador}
                        keyExtractor={(Heroi: Heroi) => Heroi.id}
                        renderItem={({ item }) => <CardHeroi value={item} navigation={navigation} />}
                    />

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Assassino</Text>
                    <FlatList
                        horizontal={true}
                        data={Assassino}
                        keyExtractor={(Heroi: Heroi) => Heroi.id}
                        renderItem={({ item }) => <CardHeroi value={item} />}
                    />

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Lutador</Text>
                    <FlatList
                        horizontal={true}
                        data={Lutador}
                        keyExtractor={(Heroi: Heroi) => Heroi.id}
                        renderItem={({ item }) => <CardHeroi value={item} />}
                    />

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Mago</Text>
                    <FlatList
                        horizontal={true}
                        data={Mago}
                        keyExtractor={(Heroi: Heroi) => Heroi.id}
                        renderItem={({ item }) => <CardHeroi value={item} />}
                    />

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Suporte</Text>
                    <FlatList
                        horizontal={true}
                        data={Suporte}
                        keyExtractor={(Heroi: Heroi) => Heroi.id}
                        renderItem={({ item }) => <CardHeroi value={item} />}
                    />

                    <Text style={{ marginLeft: 15, marginBottom: 15, marginTop: 15 }}>Tank</Text>
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
        marginBottom: 80
    },
})