import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        {/* Copyright */}
        <div className="copyright-section">
          <p className="copyright">
            Luciene Rochael © {currentYear}. Todos os Direitos Reservados.
          </p>
          <p className="developer">
            Desenvolvido por <span className="developer-name">Tarsila Rochael</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;