import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import PlayerPage from './playerPage/playerPage';
import SetupPage from './setupPage/setupPage';
import StartPage from './startPage/startPage';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/start" component={StartPage} />
      <Route exact path="/setup" component={SetupPage} />
      <Route exact path="/player" component={PlayerPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;