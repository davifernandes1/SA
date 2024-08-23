import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

export function DadosResponsavel() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ÁREA DO RESPONSÁVEL</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados pessoais</Text>
        <View style={styles.personalInfo}>
          <View style={styles.profileImageContainer}>
          </View>
          <Text style={styles.name}>Anderson Guedes</Text>
          <Text style={styles.email}>anderson_guedes@estudante.sesisenai.org.br</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoText}>Anderson Guedes</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Idade:</Text>
            <Text style={styles.infoText}>18 Anos</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>CPF:</Text>
            <Text style={styles.infoText}>123.456.789-00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>RG:</Text>
            <Text style={styles.infoText}>7.913.100</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Celular:</Text>
            <Text style={styles.infoText}>(12) 34567-8901</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados do responsável</Text>
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoText}>Julio Cesas Coelho</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>CPF:</Text>
            <Text style={styles.infoText}>987.654.321-00</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>RG:</Text>
            <Text style={styles.infoText}>5.432.100</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Celular:</Text>
            <Text style={styles.infoText}>(12) 12345-6789</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoText}>juliocesar@hotmail.com</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

// ... (código posterior)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 25,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '100',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  personalInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  name: {
    fontSize: 22,
    marginTop: 10,
  },
  email: {
    fontSize: 12,
    color: '#777',
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginVertical: 35,
    elevation: 5, // Adicione esta propriedade para sombra no Android
    shadowColor: 'black', // Adicione estas propriedades para sombra no iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoText: {
    fontSize: 16,
  },
});

