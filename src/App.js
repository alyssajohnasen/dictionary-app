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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Alyssa Johnasen</small>
        </footer>
      </div>
    </div>
  );
}
