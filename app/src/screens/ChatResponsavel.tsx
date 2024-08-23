import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ChatResponsavel() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
    }
  };

  const handleAttachment = () => {
    // Implement your attachment functionality here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ÁREA DO RESPONSAVELL</Text>
        <Text style={styles.description}>Chat</Text>
        <Text style={styles.description2}>Conversando com Sámira Alvandará</Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Message text={item.text} isUser={item.isUser} />}
        contentContainerStyle={styles.messageList}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TouchableOpacity onPress={handleAttachment}>
          <Ionicons name="attach-outline" size={24} color="#7ec9ff" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite sua mensagem..."
        />
        <View style={styles.buttonContainer}>
          <Button title="Enviar" onPress={handleSendMessage} color="#3eaaf9" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const Message = ({ text, isUser }) => {
  return (
    <View style={isUser ? styles.userMessage : styles.otherMessage}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '100',
  },
  description: {
    fontSize: 25,
    color: 'black',
    marginTop: 30,
  },
  description2: {
    fontSize: 16,
    fontWeight: '100',
    color: '#555555',
    marginTop: 8,
  },
  messageList: {
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 10,
    color: '#747474',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    width: '85%',
    marginTop: 10,
  },
  buttonContainer: {
    borderRadius: 13,
    overflow: 'hidden', // Para garantir que o borderRadius seja aplicado corretamente
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3eaaf9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  messageText: {
    color: 'white',
  },
});
