import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

export function HomeAdministrador() {
  const navigation = useNavigation();

  const CustomButton = ({ title, iconName, screenName }) => {
    const iconComponent = iconName ? (
      <Icon name={iconName} size={50} color="black" />
    ) : (
      <FontAwesome name="clock-o" size={50} color="black" />
    );

    return (
      <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate(screenName)}>
        {iconComponent}
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image source={require('../img/senai.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.topContent}>
        <Text style={styles.title}>Acesso Escolar</Text>
        <Text style={styles.subtitle}>Sistema de Entrada e Saída</Text>
      </View>
      <View style={styles.row}>
        <CustomButton title="Conta" iconName="user" screenName="DadosAluno" />
        <CustomButton title="Chat" iconName="comment-o" screenName="screenE" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Notificações" iconName="bell" screenName="Notifica" />
        <CustomButton title="Registrar Aluno" iconName="user" screenName="RegistraAluno" />
      </View>
      <View style={styles.row}>
        <CustomButton title="Registrar Entrada Tardia" screenName="CadastraEntrada" />
        <CustomButton title="Registrar Saída Antecipada" screenName="CadastraSaida" />
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
    marginTop: -20,
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});
