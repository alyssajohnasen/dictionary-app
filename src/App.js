import logo from './logo-shecodes.png';
import './App.css';
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="text-center">Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://www.linkedin.com/in/alyssa-johnasen/" target="_blank" rel="noreferrer">Alyssa Johnasen</a> and open-sourced on <a href="https://github.com/alyssajohnasen/dictionary-app" target="_blank" rel="noreferrer">GitHub</a></small>
        </footer>
      </div>
    </div>
  );
}
