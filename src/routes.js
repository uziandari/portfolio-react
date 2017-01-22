import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Blog from './components/Blog/index';
import Projects from './components/Projects/index';
import NotFound from './components/NotFound/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/blog" component={Blog} />
    <Route path="/*" component={NotFound} />
  </Router>
);

export default Routes;