// @flow

import * as React from 'react';

import { ItemList } from '/src/components/ItemList/ItemList';
import { FloatingButton } from '/src/components/FloatingButton/FloatingButton';

export const LandingPage = () => (
  <React.Fragment>
    <ItemList />
    <FloatingButton to="item/create" />
  </React.Fragment>
);
