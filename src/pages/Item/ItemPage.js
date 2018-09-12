// @flow

import * as React from 'react';
import type { ContextRouter } from 'react-router-dom';

import { ItemContainer } from '/src/containers/ItemContainer';

export const ItemPage = ({
  match: {
    params: { id },
  },
}: ContextRouter) => <ItemContainer id={id} />;
