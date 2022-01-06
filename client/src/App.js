import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';
import History from './History';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a>
            Realizacja zadania nr1 w ramach laboratorium PFSwCO
          </a>
          <a>
          Hubert Kazimierczuk</a>
          <Link to="/fibs">Fibs Calc</Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route path="/fibs" component={Fib} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/history" component={History} />
        </div>
      </div>
    </Router>
  );
}

export default App;
