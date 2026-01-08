import React from 'react';
import { FiCalendar, FiBookOpen } from 'react-icons/fi';
import foto1 from '../assets/foto1.jpeg'; 

const Hero = () => {
  const handleAgendarClick = () => {
    // Rola até a seção de contato
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
      contatoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Atualiza a URL com o hash
      window.history.pushState(null, null, '#contato');
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          {/* Texto à esquerda */}
          <div>
            <h2 className="greeting">Prazer,</h2>
            
            <h1 className="hero-title">
              Luciene
              <span>Psicóloga & Orientadora de carreira</span>
            </h1>

            <p className="hero-description">
              Valorizo a clareza e profundidade,
a ética e a humanidade. O meu
propósito é apoiar e potencializar
você em suas travessias e
transições de vida, lançando luz
sobre suas questões, promovendo
novos pontos de vista para ampliar
a consciência e ação e cultivar a
coragem necessária para viver
plenamente.
            </p>

            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={handleAgendarClick}
              >
                <FiCalendar style={{ marginRight: '8px' }} />
                Agendar Consultoria
              </button>
            </div>
          </div>

          {/* Foto à direita */}
          <div className="hero-image">
            <img 
              src={foto1} 
              alt="Foto de Luciene Rochael" 
              className="hero-photo-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;