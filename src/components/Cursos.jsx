import React from 'react';
import '../styles/Cursos.css';

/* --- ÁREA DE IMPORTAÇÃO DAS IMAGENS (Pasta assets) --- */
/* Certifique-se que os arquivos estão na pasta src/assets com ESSES nomes exatos */
import icon1 from '../assets/icon1.jpeg'; 
import icon2 from '../assets/icon2.jpeg'; 
import icon3 from '../assets/icon3.jpeg';
import fotoEbook from '../assets/foto2.jpeg'; 

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      titulo: "Oriente-se Desenhando sua Carreira",
      subtitulo: "Guia prático para encontrar sua direção profissional",
      descricao: "Um curso completo para quem busca redesenhar sua trajetória profissional com propósito e clareza. Aprenda a identificar seus talentos, definir objetivos e criar um plano de carreira alinhado com seus valores.",
      imagem: icon1, // Usando a variável importada lá em cima
      destaque: "Mais vendido",
      link: "https://hotmart.com/pt-br/marketplace/produtos/oriente-se-desenhando-sua-carreira/B82652345W",
      linkTexto: "Acessar página do curso"
    },
    {
      id: 2,
      titulo: "Primeiros Passos na Gestão do Estresse",
      subtitulo: "Estratégias práticas para o dia a dia",
      descricao: "Aprenda técnicas eficazes de mindfulness e gestão emocional para transformar sua relação com o estresse. Desenvolva resiliência e encontre equilíbrio em meio às demandas da vida moderna.",
      imagem: icon2, // Usando a variável importada (icon22.jpeg)
      destaque: "Novo",
      link: "https://go.hotmart.com/X86555189C",
      linkTexto: "Ver detalhes do programa"
    },
    {
      id: 3,
      titulo: "Pacificando a Ansiedade",
      subtitulo: "Um caminho para a calma interior",
      descricao: "Curso transformador que combina terapia cognitivo-comportamental, mindfulness e técnicas de autorregulação emocional para ajudar você a desenvolver uma relação mais saudável com a ansiedade.",
      imagem: icon3, // Usando a variável importada
      destaque: "Em alta",
      link: "https://go.hotmart.com/R98989083X",
      linkTexto: "Conhecer o curso"
    }
  ];

  const ebook = {
    titulo: "E-book: Oriente-se Desenhando sua Carreira",
    subtitulo: "Guia para iniciar sua jornada profissional",
    descricao: "Este e-book oferece os primeiros passos essenciais para quem deseja repensar sua carreira. Com exercícios práticos e reflexões profundas, você começará a traçar um caminho mais alinhado com seus valores e aspirações.",
    link: "https://go.hotmart.com/F82621141J",
    linkTexto: "Baixar e-book gratuito"
  };

  return (
    <section className="cursos-section" id="cursos">
      <div className="container">
        <div className="cursos-header">
          <h2 className="cursos-title">Cursos e Programas</h2>
          <p className="cursos-subtitle">
            Conhecimento transformador para sua jornada de autoconhecimento e desenvolvimento
          </p>
        </div>

        {/* CARDS DETALHADOS DOS CURSOS */}
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div className="curso-card" key={curso.id}>
              <div className="curso-header">
                
                <div className="curso-img-wrapper">
                  <img 
                    src={curso.imagem} 
                    alt={`Imagem do curso ${curso.titulo}`} 
                    className="curso-mini-foto" 
                  />
                </div>

                {curso.destaque && (
                  <span className="curso-badge">{curso.destaque}</span>
                )}
              </div>
              
              <div className="curso-content">
                <h3 className="curso-title">{curso.titulo}</h3>
                <h4 className="curso-subtitle">{curso.subtitulo}</h4>
                
                <p className="curso-description">{curso.descricao}</p>
                
                {/* LINK DIRETO PROEMINENTE */}
                <div className="curso-link-destaque">
                  <a 
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-destaque"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    <span>{curso.linkTexto}</span>
                    <small>Página oficial de vendas</small>
                  </a>
                </div>
                
                <div className="curso-benefits">
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Acesso imediato</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Aulas gravadas</span>
                  </div>
                </div>
                
                <a 
                  href={curso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="curso-button"
                >
                  <span>Inscreva-se agora</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                
                <div className="curso-footer">
                  <small>Link direto: <span className="url-curto">{curso.link.replace('https://', '')}</span></small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO DO E-BOOK */}
        <div className="ebook-section">
          <div className="ebook-card">
            
            {/* IMAGEM DA CAPA DO EBOOK */}
            <div className="ebook-header">
              <img 
                src={fotoEbook} 
                alt="Capa do E-book Oriente-se" 
                className="ebook-image" 
              />
            </div>
            
            <div className="ebook-content">
              <h3 className="ebook-title">{ebook.titulo}</h3>
              <h4 className="ebook-subtitle">{ebook.subtitulo}</h4>
              
              <p className="ebook-description">{ebook.descricao}</p>
              
              <div className="ebook-highlights">
                <div className="highlight-item">
                  <i className="fas fa-download"></i>
                  <span>Download imediato</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-file-pdf"></i>
                  <span>Formato PDF</span>
                </div>
              </div>
              
              <a 
                href={ebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ebook-button"
              >
                <i className="fas fa-download"></i>
                <span>Baixar e-book</span>
              </a>
              
              <div className="ebook-note">
                <small>
                  <i className="fas fa-lightbulb"></i>
                  <strong>Dica:</strong> Comece por aqui se está dando os primeiros passos na reorientação de carreira
                </small>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cursos-cta">
          <p className="cta-text">
            Invista no seu desenvolvimento pessoal e profissional com cursos desenvolvidos 
            a partir de anos de experiência em psicologia e orientação de carreira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cursos;