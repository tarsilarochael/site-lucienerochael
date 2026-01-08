// Contact.jsx - VERSÃO SIMPLIFICADA E ALINHADA
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Estou aqui para ajudar. Entre em contato para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        {/* CONTATO SIMPLES E ALINHADO */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="card-content">
              <h3>E-mail</h3>
              <p className="contact-info">lucienerochaelprofissional@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="card-content">
              <h3>Telefone/WhatsApp</h3>
              <p className="contact-info">+55 (31) 99956 1496</p>
              <a 
                href="https://wa.me/5531999561496" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-btn"
              >
                <i className="fab fa-whatsapp"></i> Conversar no WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* REDES SOCIAIS */}
        <div className="social-section">
          <h3 className="social-title">Conecte-se comigo</h3>
          <p className="social-description">
            Acompanhe meu trabalho e conteúdo sobre saúde mental e desenvolvimento pessoal.
          </p>
          
          <div className="social-buttons">
            <a 
              href="https://instagram.com/lucienerochael" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            
            <a 
              href="https://linkedin.com/in/luciene-rochael" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            
            <a 
              href="https://youtube.com/@lucienerochaeloficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              <i className="fab fa-youtube"></i> YouTube
            </a>
            
            <a 
              href="https://tiktok.com/@lucienerochael" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
            >
              <i className="fab fa-tiktok"></i> TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;