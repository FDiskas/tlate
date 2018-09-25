// @flow

import { hot } from 'react-hot-loader';
import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router4-with-layouts';

import { LandingLayout } from '/src/layouts/Landing/LandingLayout';
import { CleanLayout } from '/src/layouts/CleanLayout/CleanLayout';
import { LandingPage } from '/src/pages/Landing/LandingPage';
import { ItemPage } from '/src/pages/Item/ItemPage';
import { ItemCreatePage } from '/src/pages/ItemCreate/ItemCreatePage';
import { NotFoundPage } from '/src/pages/NotFound/NotFoundPage';

import 'bulma';
import 'font-awesome/scss/font-awesome.scss';

export const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={LandingPage} layout={LandingLayout} />
      <Route exact path="/404" component={NotFoundPage} layout={CleanLayout} />
      <Switch>
        <Route exact path="/item/create" component={ItemCreatePage} layout={CleanLayout} />
        <Route path="/item/:id" component={ItemPage} layout={CleanLayout} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
