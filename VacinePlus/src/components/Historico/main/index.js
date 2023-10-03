import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListHistorico from "../list";

export default function Main(){
    return(
        <View>
            <View>
                <ListHistorico/>    
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
    },
    // ... restante do seu estilo
  });
  