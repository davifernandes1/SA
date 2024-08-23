import './style.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header2() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setActiveItem(item);
  };

  return (
    <>
      <header className="header2">
        <div className="headerContent1">
          <NavLink to="/home">
            <div className="logo" onClick={() => handleItemClick('Home')}>
            </div>
          </NavLink>
          <nav className="nav">

            <ul>
              <div class='fundoMOD' >
              <li class='blocos'>
                <br />
                <NavLink to="/contaRES" style={{ fontStyle: 'normal' }}>Conta</NavLink>
              </li>
              <li class='blocos'>
                <br />
                <NavLink to="/verificarPresente" style={{ fontStyle: 'normal' }}>Verificar presenca</NavLink>
              </li>
              <li class='blocos'>
                <br />
                <NavLink to="/tirarRelatorio" style={{ fontStyle: 'normal' }}>Tirar relatorio</NavLink>
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

export default Header2