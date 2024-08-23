import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function App() {
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


  return (
    <div>
      <div class='fundo'>
      {/* Cabeçalho */}
      <h1>Gerenciamento <br />de Alunos</h1>


      {/* Formulário de adição de aluno */}
      <form onSubmit={handleSubmit}>
        <input class="btnCAD"
          type="text"
          name="rg"
          placeholder="RG"
          value={novoAluno.rg}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, rg: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoAluno.cpf}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, cpf: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="numCelular"
          placeholder="Número de Celular"
          value={novoAluno.numCelular}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, numCelular: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="email"
          placeholder="Email"
          value={novoAluno.email}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, email: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="dataNasc"
          placeholder="Data de Nascimento"
          value={novoAluno.dataNasc}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, dataNasc: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoAluno.nome}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, nome: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="idmatricula"
          placeholder="ID de Matrícula"
          value={novoAluno.idmatricula}
          onChange={(event) =>
            setNovoAluno({ ...novoAluno, idmatricula: event.target.value })
          }
        />
        <button type="submit">Adicionar Aluno</button>
      </form>


      {/* Lista de alunos */}
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.rg}>
            {aluno.rg} - {aluno.nome} ({aluno.dataNasc})


            <button onClick={() => handleDelete(aluno.rg)}>Excluir</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}


export default App;

