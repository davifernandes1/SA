import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import companyImage from './AcessoEscolar.jpg';


export function Page() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <HeaderPage />
      <div className="pageContainer">
        <div className="headerContent">
          <h1 className='pageTitle'>Acompanhe seu <span id='blue'>aluno</span> por completo, totalmente gratuito</h1>
          <NavLink to="/login">
          <p className= 'btnSignIn' style={{ textDecoration: 'none'}}> Entrar </p>
          </NavLink>
        </div>
        <div className="companySection">
          <img src={companyImage} alt="Acesso Escolar" />
        </div>
        <div className="companySection" id="aboutSection">
          <h2>Sobre a Empresa</h2>
          <p>A Acesso Escolar é uma empresa dedicada a proporcionar soluções inovadoras para o gerenciamento de entrada e saída de alunos nas escolas. Nossos sistemas são desenvolvidos para oferecer praticidade e eficiência, garantindo a segurança e organização nas instituições de ensino.</p>
        </div>


        <div className="contactSection" id="contactSection">
          <h2>Contato dos Criadores</h2>
          <p>Entre em contato conosco para obter mais informações sobre nosso aplicativo.</p>
          <ul>
            <li>Número: (123) 456-7890</li>
            <li>Email: contato@acessoescolar.com</li>
            <li>Redes Sociais:
              <a href="https://www.facebook.com/acessoescolar" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a href="https://twitter.com/acessoescolar" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a href="https://www.instagram.com/acessoescolar" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


function HeaderPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><a onClick={() => scrollToSection('aboutSection')}>Sobre</a></li>
        <li><a onClick={() => scrollToSection('contactSection')}>Contato</a></li>
      </ul>
    </div>
  );
}


