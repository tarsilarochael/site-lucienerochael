import React from 'react';
import foto4 from '../assets/foto4.jpeg';

const Sobre = () => {
  return (
    <section id="sobre" className="about">
      <div className="container">
        
        {/* Parte 1: Foto + Título lado a lado */}
        <div className="about-top-section">
          
          {/* Foto à ESQUERDA (altura total) */}
          <div className="about-main-image">
            <img src={foto4} alt="Luciene Rochael" className="about-photo-full" />
          </div>
          
          {/* Título à DIREITA */}
          <div className="about-title-section">
            <span className="about-subtitle">MINHA JORNADA</span>
            <h2 className="about-title">
              Apoio mulheres a reencontrarem a sua essência.
            </h2>
            <div className="about-divider"></div>
            <p className="about-intro">
              Eu sou Luciene Rochael, mineira, curiosa, ávida por aprender, 
              realizadora, estudiosa e criativa. Me encanto com novas possibilidades!
            </p>
          </div>
          
        </div>
        
        {/* Parte 2: Conteúdo em colunas ABAIXO da foto */}
        <div className="about-columns-section">
          
          {/* Primeira coluna */}
          <div className="about-col">
            <div className="about-content-card">
              <h3 className="content-card-title">20 anos de Psicologia</h3>
              <p className="content-card-text">
                Há 20 anos abracei a Psicologia como minha profissão, 
                com especialização em Neuropsicologia e Arteterapia. 
                Tenho a honra de acompanhar pessoas em suas jornadas 
                de autodescoberta e crescimento.
              </p>
            </div>
          </div>
          
          {/* Segunda coluna */}
          <div className="about-col">
            <div className="about-content-card">
              <h3 className="content-card-title">Uma jornada inesperada</h3>
              <p className="content-card-text">
                A Psicologia não foi minha primeira escolha. Antes fui 
                cantora, coralista, e sempre me encantei com as artes 
                plásticas. A vida me conduziu por um caminho inesperado, 
                mas perfeito.
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Parte 3: Destaque central */}
        <div className="about-highlight-section">
          <div className="about-quote">
            <span className="quote-symbol">•</span>
            <p className="quote-text">
              Transformar dores em sabedoria e empatia
            </p>
            <span className="quote-symbol">•</span>
          </div>
        </div>
        
        {/* Parte 4: Conclusão CENTRALIZADA */}
        <div className="about-conclusion-centered">
          <div className="conclusion-content">
            <p className="conclusion-text">
              Os desafios pessoais que vivenciei foram impulsionadores 
              para minha própria jornada terapêutica. Percebi que minha 
              escolha pela Psicologia foi uma busca por curar minhas 
              próprias feridas e dar sentido às minhas experiências.
            </p>
            <p className="conclusion-text">
              Como seres humanos, somos todos tecidos por histórias 
              de alegria e dores. Acredito no impacto profundo, positivo 
              e transformador da Psicologia na vida de qualquer pessoa.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Sobre;