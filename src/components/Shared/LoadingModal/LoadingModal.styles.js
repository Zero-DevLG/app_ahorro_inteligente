import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({

    overlay: {
        height: 100, 
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#ea27e7",
        borderWidth: 2,
        borderRadius:10
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        color: "black",
        textTransform: "uppercase",
        marginTop: 10,
    }
    
})