import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login() {
  return (
    <div className="container-Login">
      <br />
      <div className="div-content"><h2 className="title">Login Aluno</h2>
        <div className="input-container-Login">
          <h3 className="input-label-Login">E-mail</h3>
          <input className='input-Login' type="email" placeholder="exemplo.estudante.sesisenai.org.br" />
        </div>
        <div className="input-container-Login">
          <h3 className="input-label-Login">Senha</h3>
          <input className='input-Login' type="password" placeholder="Insira sua senha"/> 
          <div className='esqueceuSenha-Login'>
          <Link to="/home" className='input_label-Login' style={{ color: 'black', textDecoration: 'none', marginLeft: '-13px' }}>
            Esqueceu a senha? </Link>
          </div>
        </div>

        <Link to="/homeALU" className="submit-button">Entrar</Link>
        <br />
        <p className="ou">ou</p>
        <br />
        <Link to="/loginRES" className="submit-button">Entrar como Responsavel</Link>
        <Link to="/loginADM" className="submit-button">Entrar como Administrador</Link>
      </div>
    </div>
  );
};
