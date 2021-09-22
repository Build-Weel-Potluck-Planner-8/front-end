import React, { component }from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Organizer from './organizer';
import Guest from './guest';
import styled from 'styled-components';
import { AccountBox } from "./accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledNav = styled.nav`
  background-image: url('https://images.unsplash.com/photo-1498676077434-7540603d2dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  padding: 5%;

  h1 {
    border: 2px solid orange;
    background-image: linear-gradient(to left, green, crimson);
    opacity: 80%;
    padding: 3% 2%;
    border-radius: 30px;
    text-shadow: 1px 1px orange;
    color: crimson;
    font-weight: 800;
    letter-spacing: 1.2px;
  }

  span {
    color: green;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    border: 1px solid orange;
    background-color: white;
    padding: 2% 4%;
    border-radius: 20px;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <StyledNav>
        <h1><span>Potluck</span> Planner</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/organizer'>Organizer</Link>
          <Link to='/guest'>Guest</Link>
        </div>
      </StyledNav>
      {<AppContainer>
        <Switch>
        <Route path="/signin" component={AccountBox} />
          <Route path="/signup" component={AccountBox} />
          {/* <Route path='/signin'>
            <AccountBox/>
          </Route> */}
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
        </AppContainer>
      }
    </BrowserRouter>
  );
}

export default App;
