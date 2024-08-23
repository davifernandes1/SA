import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

function App() {
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

  return (
    <div>
        <div class='fundo'>
      <h1 class='h1MOD' >Gerenciamento de Entrada Tardia</h1>

      <form onSubmit={handleSubmit}>
        <input class="btnCAD"
          type="text"
          name="data_hora"
          placeholder="Data e Hora"
          value={novoRegistroEntrada.data_hora}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, data_hora: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoRegistroEntrada.cpf}
          onChange={(event) =>
            setNovoRegistroEntrada({ ...novoRegistroEntrada, cpf: event.target.value })
          }
        />
        <button type="submit">Adicionar Entrada</button>
      </form>

      <ul>
        {registroEntrada.map((registro, index) => (
          <li key={`${registro.id}-${index}`}>
            {registro.cpf} {registro.data_hora}
            <button onClick={() => handleDelete(registro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
