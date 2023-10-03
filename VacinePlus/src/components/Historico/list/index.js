import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

export default function ListHistorico() {
    const vacinas = [
        {
          nome: 'Vacina contra a Poliomielite',
          dose: '2º Dose',
          status: 'Validado',
          dataUltimaDose: '03/10/2023',
          dataProximaDose: '03/10/2025',
        },
        {
          nome: 'Vacina contra a Hepatite B',
          dose: '1º Dose',
          status: 'Validado',
          dataUltimaDose: '15/08/2011', // Adicione a data correspondente
          dataProximaDose: '15/08/2014', // Adicione a data correspondente
        },
        {
          nome: 'Vacina contra o Covid-19',
          dose: '3º Dose',
          status: 'Pendente',
          dataUltimaDose: '20/2/2022', // Adicione a data correspondente
          dataProximaDose: '14/08/2023', // Adicione a data correspondente
        },
        {
          nome: 'Vacina contra a Gripe (Influenza)',
          dose: '2º Dose',
          status: 'Validado',
          dataUltimaDose: '07/05/2023', // Adicione a data correspondente
          dataProximaDose: '12/09/2024', // Adicione a data correspondente
        },
        {
          nome: 'Vacina contra a Difteria, Tétano e Coqueluche (DTP)',
          dose: '3º Dose',
          status: 'Validado',
          dataUltimaDose: '04/06/2021', // Adicione a data correspondente
          dataProximaDose: '16/06/2023', // Adicione a data correspondente
        },
      ];
  
  return (
    <View style={styles.container}>
      <FlatList
        data={vacinas}
        renderItem={({ item }) => (
          <View style={styles.itemVacina}>
            <Text style={styles.textoVacina}>Nome: {item.nome}{'\n'}
                  Dose: {item.dose}{'\n'}
                  Status: {item.status}{'\n'}
                  Data da Ultima Dose: {item.dataUltimaDose}{'\n'}
                  Data da Proxima Dose: {item.dataProximaDose}</Text>
          </View>
        )}
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
    marginTop: screenHeight * 0.22,
    //flex: 1,
      
    },
    itemVacina: {
      margin: 10,
      backgroundColor: '#03A9F4',
      borderRadius: 9,
      justifyContent: 'center', // centraliza verticalmente
      alignItems: 'flex-start', // centraliza horizontalmente
      width: screenWidth * 0.95, // 95% da largura da tela
      height: screenHeight * 0.14, // 11% da altura da tela
    },
    textoVacina: {
      marginLeft:13,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left', // centraliza o texto dentro do itemVacina
    },
  });
