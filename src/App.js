import logo from './dictionary-header.png';
import './App.css';
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://www.linkedin.com/in/alyssa-johnasen/" target="_blank" rel="noreferrer">Alyssa Johnasen</a> | Open-sourced on <a href="https://github.com/alyssajohnasen/dictionary-app" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a></small>
        </footer>
      </div>
    </div>
  );
}
