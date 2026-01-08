// components/Sessions.jsx
import React from 'react';
import '../styles/Sessions.css';

const Sessions = () => {
  const services = [
    {
      id: 1,
      title: "Terapias Contextuais",
      icon: "🧠",
      description: "Esta abordagem busca promover uma reestruturação cognitiva profunda em relação às emoções e comportamentos do indivíduo, por meio de intervenções focadas em cognições — pensamentos e crenças — que surgem a partir de eventos significativos na vida do paciente. Inclui técnicas da Terapia Cognitivo-Comportamental baseada em Mindfulness, Terapia do Esquema (TE) e Terapia da Aceitação e do Compromisso (ACT), visando desenvolver flexibilidade psicológica e maior consciência emocional."
    },
    {
      id: 2,
      title: "Mindfulness",
      icon: "🌱",
      description: "É a prática intencional de estar presente, com abertura e aceitação, ao momento atual. Amplamente reconhecida por sua eficácia, o mindfulness contribui tanto para a promoção do bem-estar psicológico em pessoas saudáveis quanto para o tratamento de diversos distúrbios mentais, como ansiedade, depressão, transtornos alimentares, hipertensão, dor crônica e outros quadros relacionados ao estresse e desregulação emocional."
    },
    {
      id: 3,
      title: "Arte e Saúde Mental",
      icon: "🎨",
      description: "O encontro entre arte e saúde mental oferece um caminho criativo e sensível para expressão e desenvolvimento pessoal. Por meio de recursos artísticos — como pintura, desenho, modelagem, fotografia e colagem — e diferentes linguagens artísticas, o processo terapêutico ocorre em um ambiente seguro e acolhedor, promovendo bem-estar integral e autoconhecimento."
    },
    {
      id: 4,
      title: "Psicoterapia Online Individual",
      icon: "💻",
      description: "Meu compromisso é unir o conhecimento científico mais atual com um atendimento acolhedor e personalizado, considerando suas necessidades individuais para alcançar os melhores resultados no seu processo terapêutico. Sessões realizadas de forma remota com toda a qualidade e dedicação do atendimento presencial."
    },
    {
      id: 5,
      title: "Bússola Consultoria de Carreira",
      icon: "🧭",
      description: "Redesenhe sua trajetória profissional com propósito e confiança. Consultoria especializada para mulheres que desejam ressignificar sua carreira e conquistar realização profissional. Trabalhamos com autoconhecimento, planejamento estratégico e desenvolvimento de habilidades para transições de carreira assertivas."
    }
  ];

  return (
    <section className="sessions-section" id="sessoes">
      <div className="container">
        <div className="sessions-header">
          <h2 className="sessions-title">Abordagens e Serviços</h2>
          <p className="sessions-subtitle">
            Conheça as diferentes formas de trabalho terapêutico e consultivo que ofereço
          </p>
        </div>

        <div className="sessions-grid">
          {services.map((service) => (
            <div className="session-card" key={service.id}>
              <div className="session-icon-wrapper">
                <span className="session-icon">{service.icon}</span>
              </div>
              <h3 className="session-card-title">{service.title}</h3>
              <p className="session-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;