import logo from './logo.svg';
import './App.css';
import login from './Components/login'; // Correct the import to use a capital 'L'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Shubham
        </a>
      </header>
      <login /> 
    </div>
  );
}

export default App;
