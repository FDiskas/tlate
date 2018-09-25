// @flow

import * as React from 'react';
import type { ContextRouter } from 'react-router-dom';

import { ItemContainer } from '/src/containers/ItemContainerComponent';

export const ItemPage = ({
  match: {
    params: { id },
  },
}: ContextRouter) => <ItemContainer id={id} />;
