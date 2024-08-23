import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export function RegistraAluno() {
  const navigation = useNavigation();
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    rg: '',
    cpf: '',
    numCelular: '',
    email: '',
    dataNasc: '',
    nome: '',
    idmatricula: '',
  });

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:8090/aluno');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/aluno', novoAluno);
      fetchAlunos();
      setNovoAluno({
        rg: '',
        cpf: '',
        numCelular: '',
        email: '',
        dataNasc: '',
        nome: '',
        idmatricula: '',
      });
    } catch (error) {
      console.error('Erro ao criar aluno:', error);
    }
  };

  const handleDelete = async (rg) => {
    try {
      await axios.delete(`http://localhost:8090/aluno/${rg}`);
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
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
      {/* Cabeçalho */}
      <h1 style={styles.header}>Gerenciamento de Alunos</h1>

      {/* Formulário de adição de aluno */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="rg"
          placeholder="RG"
          value={novoAluno.rg}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, rg: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoAluno.cpf}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, cpf: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="numCelular"
          placeholder="Número de Celular"
          value={novoAluno.numCelular}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, numCelular: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={novoAluno.email}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, email: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="dataNasc"
          placeholder="Data de Nascimento"
          value={novoAluno.dataNasc}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, dataNasc: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoAluno.nome}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, nome: event.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          name="idmatricula"
          placeholder="ID de Matrícula"
          value={novoAluno.idmatricula}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, idmatricula: event.target.value })
          }
          style={styles.input}
        />
        <button style={styles.addButton} type="submit">
          Adicionar Aluno
        </button>
      </form>

      {/* Lista de alunos */}
      <ul style={styles.ul}>
        {alunos.map((aluno) => (
          <li key={aluno.rg} style={styles.li}>
            {aluno.rg} - {aluno.nome} ({aluno.dataNasc})
            <button
              style={styles.deleteButton}
              onClick={() => handleDelete(aluno.rg)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
