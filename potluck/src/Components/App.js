import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import Organizer from './organizer';
import Guest from './guest';

const App = () => {
  return (
    <>
      <nav>
        <h1>Potluck Planner</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/organizer'>Potluck Organizer</Link>
          <Link to='/guest'>Potluck Guest</Link>
        </div>
      </nav>
      {
        <Switch>
          <Route path='/organizer'>
            <Organizer />
          </Route>
          <Route path='/guest'>
            <Guest />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      }
    </>
  );
}

export default App;
