import './App.css';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <h2 style={{ fontSize: 50 }}>⚒️</h2>
        <p>
          Check out our first product:
        </p>
        <a
          className="App-link"
          href="https://www.platospeach.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plato's Peach
        </a>
      </header>
    </div>
  );
}

export default App;
