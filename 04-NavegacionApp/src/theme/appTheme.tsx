import { StyleSheet } from "react-native";

export const colores= {
    primary: '#5856D6',
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    }, 
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    Boton:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderWidth: 5,
    },
    BotonTexto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatarContainer:{
        alignItems: 'center',
        marginVertical: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        margin: 30,
        alignItems: 'center',
    },
    menuButton: {
        marginTop: 15,
        padding: 5,
        borderWidth: 4,
        width: 250,
    },
    menuText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsHeader:{
        marginVertical: 15,
        fontSize: 20,
    },
});