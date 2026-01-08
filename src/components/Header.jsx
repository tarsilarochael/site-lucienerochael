// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <a href="#inicio">
              <h1>Luciene Rochael</h1>
              <p>Psicóloga Clínica</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#sessoes">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Mobile Navigation */}
          <div className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
            <nav>
              <ul>
                <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
                <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
                <li><a href="#sessoes" onClick={closeMenu}>Serviços</a></li>
                <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;