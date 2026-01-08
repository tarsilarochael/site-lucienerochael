import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Sessions from './components/Sessions';
import Cursos from './components/Cursos';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Sessions />
      <Cursos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;