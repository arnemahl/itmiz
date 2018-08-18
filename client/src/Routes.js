import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landingpage from 'pages/Landingpage/Landingpage';
import Auth from 'pages/Auth/Auth';
import ListPage from 'pages/ListPage/ListPage';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landingpage} />

      <Route exact path="/login" component={Auth} />
      <Route exact path="/signup" component={Auth} />

      <Route exact path="/lists/:listId" component={ListPage} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
