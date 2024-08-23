import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function TurmaButton({ turma }) {
  return (
    <TouchableOpacity style={styles.turmaButton} onPress={() => console.log(`Turma ${turma} selecionada`)}>
      <Text style={styles.turmaButtonText}>{turma}</Text>
    </TouchableOpacity>
  );
}

export function PresenteProfessor() {
    
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/senai.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Acesso Escolar</Text>
        <Text style={styles.headerSubtitle}>Sistema de entrada e saída</Text>
      </View>
      <Text style={styles.turmaHeader}>Selecione a Turma:</Text>
      <View style={styles.turmaContainer}>
      <Text style={styles.anoHeader}>1º Ano</Text>
        <View style={styles.turmaRow}>
          <TurmaButton turma="1A" />
          <TurmaButton turma="1B" />
        </View>
        <View style={styles.turmaRow}>
          <TurmaButton turma="1C" />
          <TurmaButton turma="1D" />
        </View>
        <Text style={styles.anoHeader}>2º Ano</Text>
        <View style={styles.turmaRow}>
          <TurmaButton turma="2A" />
          <TurmaButton turma="2B" />
        </View>
        <View style={styles.turmaRow}>
          <TurmaButton turma="2C" />
          <TurmaButton turma="2D" />
        </View>
        <Text style={styles.anoHeader}>3º Ano</Text>
        <View style={styles.turmaRow}>
          <TurmaButton turma="3A" />
          <TurmaButton turma="3B" />
        </View>
        <View style={styles.turmaRow}>
          <TurmaButton turma="3C" />
          <TurmaButton turma="3D" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  header: {
    alignItems: 'center',
    paddingTop: 220,
  },
  turmaHeader: {
    fontSize: 24,
    marginBottom:20,
  },
  turmaContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  turmaRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  turmaButton: {
    backgroundColor: '#007AFF', // Cor de fundo dos botões
    padding: 10,
    margin: 5,
    width: 150, // Largura aumentada
    alignItems: 'center',
  },
  turmaButtonText: {
    color: 'white', // Cor do texto
    fontSize: 18, // Tamanho da fonte aumentado
  },
  logo: {
    width: 120,
    height: 90,
    resizeMode: 'contain',
    marginTop: -220,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -30,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#555',
  },
    anoHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

