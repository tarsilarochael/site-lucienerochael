import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#sessoes' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1>Luciene Rochael</h1>
            <p>Psicóloga & Orientadora de Carreira</p>
          </div>

          {/* Menu Desktop */}
          <nav className="nav-desktop">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Mobile Toggle */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--white)',
            padding: '1rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '1rem',
                  color: 'var(--dark)',
                  textAlign: 'center',
                  borderBottom: '1px solid var(--gray-light)',
                  textDecoration: 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;