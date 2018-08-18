import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landingpage from 'pages/Landingpage/Landingpage';
import Auth from 'pages/Auth/Auth';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landingpage} />

      <Route exact path="/login" component={Auth} />
      <Route exact path="/signup" component={Auth} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
