import React from 'react';
import logo from './images/profile pic.jpeg';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Apurva Periwal
        </p>
        <section>
        <a
          href="https://www.instagram.com/apurva.peri/"
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        ><FaInstagram /></a>
        <span>  </span>
        <a
          href="https://github.com/apurva1706/"
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        ><FaGithub /></a>
        <span>  </span>
        <a
          href="https://www.linkedin.com/in/apurva-periwal-2873221b3/"
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        ><FaLinkedin /></a>
        </section>
      </header>
    </div>
  );
}

export default App;
