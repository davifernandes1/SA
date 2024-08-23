import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

function App() {
  const [registroSaida, setRegistroSaida] = useState([]);
  const [novoRegistroSaida, setNovoRegistroSaida] = useState({
    data_hora: '',
    cpf: '',
  });

  useEffect(() => {
    fetchRegistroSaida();
  }, []);

  const fetchRegistroSaida = async () => {
    try {
      const response = await axios.get('http://localhost:8090/registrosaida');
      setRegistroSaida(response.data);
    } catch (error) {
      console.error('Erro ao buscar registrosaida:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/registrosaida', novoRegistroSaida);
      fetchRegistroSaida();
      setNovoRegistroSaida({
        data_hora: '',
        cpf: '',
      });
    } catch (error) {
      console.error('Erro ao criar registrosaida:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/registrosaida/${id}`);
      fetchRegistroSaida();
    } catch (error) {
      console.error('Erro ao excluir registrosaida:', error);
    }
  };

  return (
    <div>
      <div class='fundo'>
      <h1 class='h1MOD'>Gerenciamento de Saida</h1>

      <form onSubmit={handleSubmit}>
        <input class="btnCAD"
          type="text"
          name="data_hora"
          placeholder="Data e Hora"
          value={novoRegistroSaida.data_hora}
          onChange={(event) =>
            setNovoRegistroSaida({ ...novoRegistroSaida, data_hora: event.target.value })
          }
        />
        <input class="btnCAD"
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoRegistroSaida.cpf}
          onChange={(event) =>
            setNovoRegistroSaida({ ...novoRegistroSaida, cpf: event.target.value })
          }
        />
        <button  type="submit">Adicionar Saida</button>
      </form>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      <ul>
        {registroSaida.map((registro, index) => (
          <li key={`${registro.id}-${index}`}>
            {registro.data_hora} - {registro.cpf} 
            <button class='gg' onClick={() => handleDelete(registro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
}

export default App;