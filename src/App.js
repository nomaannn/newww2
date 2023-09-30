import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyCartPage from './components/MyCartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Shopping Cart App</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={MyCartPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

