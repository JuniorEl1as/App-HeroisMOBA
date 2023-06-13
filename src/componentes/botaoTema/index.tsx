import React, { useContext, useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { Feather, Entypo  } from '@expo/vector-icons';
import { AuthContext } from "../../../context";

export default function Menu () {
    const { corFundo, setCorFundo }: any = useContext(AuthContext);
    const [botaoCorFundo, setBotaoCorFundo] = useState<boolean>(false)

    function mudarBackGround(value: boolean) {
        if (value) {
            setCorFundo("#000")
            setBotaoCorFundo(true)
        }
        else if (corFundo === "#000") {
            setCorFundo("#252c76")
            setBotaoCorFundo(false)
        }
    }

    return (
        <View style={styles.menu}>

            <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }}>Herois Moba</Text>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                <Feather name="sun" size={24} color="white" />
                <Switch
                    value={botaoCorFundo}
                    thumbColor={'#f5dd4b'}
                    onValueChange={(value: boolean) => mudarBackGround(value)}
                />
                <Entypo name="moon" size={24} color="white" />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    }
})