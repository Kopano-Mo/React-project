import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
    <Weather defaultCity="Pretoria"/>
      < footer>
      This project was coded by {" "}
        <a href="https://github.com/Kopano-Mo" target="_blank" rel="noopener noreferrer">kopano molapo</a> and is
        <a href="https://github.com/Kopano-Mo/DRAMATIC-CODE" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub </a> and
        <a href="https://main--now-work.netlify.app/" target="_blank" rel="noppener noreferrer">hosted on Netlify</a>
        </footer>
      </div> 
    </div>
  );
}

