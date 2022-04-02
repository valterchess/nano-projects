import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import UseScript from './hooks/useScript';
import './App.css';

function App() {
  

  return (
    <>
      <Router>
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;