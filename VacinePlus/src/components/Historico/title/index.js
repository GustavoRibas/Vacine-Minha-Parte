import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
        <View>
            <View style={styles.fundoAzul}>
                <Text style={styles.tituloText}>Histórico de Vacinas</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({   
    container: {
        // Adicione estilos ao contêiner principal, se necessário.
    },
    fundoAzul: {
        height: 100,
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 10,
    },
    tituloText: {
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
        fontWeight: 'bold',
    },
});
