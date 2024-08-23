import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export function ScreenEscolha() {
    
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
          source={require('../img/senai.png')}
          style={styles.logo}
          resizeMode="contain"
        />
                <Text style={styles.title}>Acesso Escolar</Text>
                <Text style={styles.description}>Sistema de entrada e saída</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity  onPress={() => navigation.navigate('PresenteProfessor')} style={styles.button}>
                    <Text style={styles.buttonText}>Saida Antecipada</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionButton}>Apenas alunos que tiveram a saida antecipada</Text>

                <TouchableOpacity onPress={() => navigation.navigate('PresenteProfessor')} style={styles.button}>
                    <Text style={styles.buttonText}>Entrada Tardia</Text>
                </TouchableOpacity>
                <Text style={styles.descriptionButton}>Para alunos que tiveram a entrada tardia</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ec9ff',
        paddingTop: 30,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -30,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 2,
        width: '70%',
        shadowColor: 'black', // Adiciona sombra no iOS
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 25,
        color: 'black',
        marginTop: -7,
        textAlign: 'center',
    },
    descriptionButton: {
        fontSize: 11,
        color: 'black',
        marginTop: -15,
        textAlign: 'center',
        marginBottom: 28,
    },
});
