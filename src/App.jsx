import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Layouts/Home';
import Auth from './Components/Containers/Auth';

function AppTest() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppTest />
    </BrowserRouter>
  );
}

export default {
  AppTest, App,
};
