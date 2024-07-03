import React, { useRef } from 'react';
import './App.css';
import Header from './components/header';
import Aktuelles from './components/aktuelles';
import Events from './components/events';
import Kurse from './components/kurse';
import Kontakt from './components/kontakt';
import KontaktForm from './components/kontaktForm';
import Footer from './components/footer'; // new component

function App() {
  const aktuellesRef = useRef(null);
  const eventsRef = useRef(null);
  const kurseRef = useRef(null);
  const kontaktRef = useRef(null);
  const kontaktFormRef = useRef(null);
  const headerHeight = 87;

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} aktuellesRef={aktuellesRef} eventsRef={eventsRef} kurseRef={kurseRef} kontaktRef={kontaktRef} kontaktFormRef={kontaktFormRef} />
      <main className="main">
        <section ref={aktuellesRef}><Aktuelles /></section>
        <section ref={eventsRef}><Events /></section>
        <section ref={kurseRef}><Kurse /></section>
        <section ref={kontaktRef}><Kontakt /></section>
        <section ref={kontaktFormRef}><KontaktForm /></section>
      </main>
      <Footer /> {/* new footer */}
    </div>
  );
}

export default App;

