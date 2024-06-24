import React, { useRef } from 'react';
import './App.css';
import Header from './components/header';
import UeberUns from './components/ueberuns';
import Kurse from './components/kurse';
import Kontakt from './components/kontakt';

function App() {
  const ueberUnsRef = useRef(null);
  const kurseRef = useRef(null);
  const kontaktRef = useRef(null);
  const headerHeight = 87;

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} ueberUnsRef={ueberUnsRef} kurseRef={kurseRef} kontaktRef={kontaktRef} />
        <main className="main">
          <section ref={ueberUnsRef}><UeberUns /></section>
          <section ref={kurseRef}><Kurse /></section>
          <section ref={kontaktRef}><Kontakt /></section>
        </main>
      
    </div>
  );
}

export default App;
