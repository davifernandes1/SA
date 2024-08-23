import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function RelatorioAluno() {
    const navigation = useNavigation();

    const openScreen = () => {
        // Implemente a função para navegar para a tela desejada
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Relatórios</Text>
            </View>
            
            {/* Adicione os blocos retangulares com texto acima */}
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 29/08</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 30/09</Text>
            </View>
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>Dia 31/09</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Leva os elementos ao topo
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerContainer: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    rectangle: {
        width: 354,
        height: 71,
        backgroundColor: '#EFEFEF',
        marginVertical: 10,
    },
    rectangleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute', // Posiciona o texto absolutamente dentro do retângulo
        top: -20, // Posiciona o texto acima do retângulo
        left: 10, // Espaçamento à esquerda do retângulo
    },
});