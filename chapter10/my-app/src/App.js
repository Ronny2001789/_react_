import logo from './logo.svg';
import './App.css';
import CounterBox from './counterbox.js';
import UserCard from './usercard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* Custom Components */}
        <CounterBox label="Click Counter" />
        <UserCard username="Ronny Mputla" />
      </header>
    </div>
  );
}

export default App;
