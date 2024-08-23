import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function LoginADM() {
  return (
    <div className="container-Login">
      <br />
      <div className="div-content"><h2 className="title">Login ADM</h2>
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

        <Link to="/homeADM" className="submit-button">Entrar</Link>
      </div>
    </div>
  );
};