import * as React from 'react';
import { ItemContainer } from '../../containers/ItemContainerComponent';

export const ItemPage = ({
  match: {
    params: { id },
  },
}) => <ItemContainer id={id} />;
