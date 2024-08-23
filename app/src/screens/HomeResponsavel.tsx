import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

export function HomeResponsavel() {
  const navigation = useNavigation();

  const CustomButton = ({ title, iconName, screenName }) => (
    <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate(screenName)}>
      <Icon name={iconName} size={50} color="black" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../img/senai.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.topContent}>
        <Text style={styles.title}>Acesso Escolar</Text>
        <Text style={styles.subtitle}>Sistema de Entrada e Saída</Text>
      </View>
      <View style={styles.row}>
        <CustomButton title="Historico" iconName="history" screenName="ScreenEscolha" />
        <CustomButton title="Relatorio" iconName="file-text-o" screenName="RelatorioAluno" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Conta" iconName="user" screenName="DadosResponsavel" />
        <CustomButton title="Chat" iconName="comment-o" screenName="ChatResponsavel" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Notificacoes" iconName="bell" screenName="Notifica" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -20, // Adjust the marginTop to move the "Acesso Res" text closer to the logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 5,
    width: 162,
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  // Image container styles
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});
