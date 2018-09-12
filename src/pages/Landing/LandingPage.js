// @flow

import * as React from 'react';

import { ItemList } from '../../components/ItemList/ItemList';
import { FloatingButton } from '../../components/FloatingButton/FloatingButton';

export const LandingPage = () => (
  <React.Fragment>
    <ItemList />
    <FloatingButton to="item/create" />
  </React.Fragment>
);
