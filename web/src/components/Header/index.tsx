import './style.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header">
        <div className="headerContent1">
          <NavLink to="/home">
            <div className="logo" onClick={() => handleItemClick('Home')}>
            </div>
          </NavLink>
          <nav className="nav">
            <ul>
              <div class='fundoMOD'>
              <li class='blocos'>
                <br />
                <NavLink to="/ContaADM" style={{ fontStyle: 'normal' }}>Ver Conta</NavLink>
              </li>
              <li class='blocos'>
                <br />
                <NavLink to="/CadastraALU" style={{ fontStyle: 'normal' }}>Cadastrar Aluno</NavLink>
              </li>
              <li class='blocos'>
                  <br />
                <NavLink to="/EntradaTARDIA" style={{ fontStyle: 'normal' }}>Registrar Entrada Tardia</NavLink>
              </li>
              <li class='blocos'>
                <br />
                <NavLink to="/SaidaANTECIPADA" style={{ fontStyle: 'normal' }}>Registrar Saida Antecipada</NavLink>
              </li>
              </div>
            </ul>
          </nav>
        </div>
        <div className="user">
        </div>
      </header>
    </>
  )
}

export default Header