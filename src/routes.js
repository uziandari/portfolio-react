import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home/index';
import NotFound from './components/NotFound/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/*" component={NotFound} />
  </Router>
);

export default Routes;