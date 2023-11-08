import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Joke from './components/Joke';

function App() {
  return (
    <div className='react-info-section'>

      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>

      <div className='joke-section'>
        <Joke
        punchline="Atomic Shroom"/>

        <Joke setup="Knock Knock?"
        punchline="Go Away"/>

        <Joke setup="What do you do for a living?"
        punchline="I breathe, don't you do that?"/>
        
      </div>
        
    </div>
  );
}

export default App;
