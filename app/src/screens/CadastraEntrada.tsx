import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export function CadastraEntrada() {
  const navigation = useNavigation();
  const [registroEntrada, setRegistroEntrada] = useState([]);
  const [novoRegistroEntrada, setNovoRegistroEntrada] = useState({
    data_hora: '',
    cpf: '',
  });

  useEffect(() => {
    fetchRegistroEntrada();
  }, []);

  const fetchRegistroEntrada = async () => {
    try {
      const response = await axios.get('http://localhost:8090/registroentrada');
      setRegistroEntrada(response.data);
    } catch (error) {
      console.error('Erro ao buscar registroentrada:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/registroentrada', novoRegistroEntrada);
      fetchRegistroEntrada();
      setNovoRegistroEntrada({
        data_hora: '',
        cpf: '',
      });
    } catch (error) {
      console.error('Erro ao criar registroentrada:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/registroentrada/${id}`);
      fetchRegistroEntrada();
    } catch (error) {
      console.error('Erro ao excluir registroentrada:', error);
    }
  };

  // Estilos
  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    input: {
      margin: '5px 0',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    addButton: {
      backgroundColor: '#7ec9ff',
      color: 'white',
      border: 'none',
      padding: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    ul: {
      listStyle: 'none',
      padding: '0',
    },
    li: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    deleteButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '8px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Gerenciamento de Entrada Tardia</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="data_hora"
          placeholder="Data e Hora"
          value={novoRegistroEntrada.data_hora}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, data_hora: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoRegistroEntrada.cpf}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, cpf: event.target.value })
          }
          style={styles.input}
        />
        <button style={styles.addButton} type="submit">Adicionar Entrada</button>
      </form>

      <ul style={styles.ul}>
        {registroEntrada.map((registro, index) => (
          <li key={`${registro.id}-${index}`} style={styles.li}>
            {registro.cpf} {registro.data_hora}
            <button style={styles.deleteButton} onClick={() => handleDelete(registro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
