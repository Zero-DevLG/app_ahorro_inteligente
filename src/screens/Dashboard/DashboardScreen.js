import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    tinyLogo: {
        width:  300,
        height: 300
    }
})


export function DashboardScreen(){

    return(
        <View style= { styles.container }>
            <Text>Bienvenido a tu aplicación de Ahorro inteligente!</Text>
            <Image style= { styles.tinyLogo }  source={require('../../assets/icon/icono_app.png')} ></Image>
        </View>
    )
}