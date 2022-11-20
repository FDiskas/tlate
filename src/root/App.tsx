// @flow
import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router4-with-layouts';
import 'bulma';
import 'font-awesome/scss/font-awesome.scss';
import { LandingLayout } from '../layouts/Landing/LandingLayout';
import { CleanLayout } from '../layouts/CleanLayout/CleanLayout';
import { ItemPage } from '../pages/Item/ItemPage';
import { ItemCreatePage } from '../pages/ItemCreate/ItemCreatePage';
import { LandingPage } from '../pages/Landing/LandingPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

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
