import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </BrowserRouter>
);

export default App;
