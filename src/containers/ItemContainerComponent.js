// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from '/src/root/connect';
import { Item } from '/src/components/Item/Item';
import type { ItemType } from '/src/components/ItemList/ItemList';

type Props = {
  item: ItemType,
};
export class ItemContainerComponent extends React.Component<Props, {}> {
  render() {
    const { item } = this.props;

    if (!item) {
      return 'Loading...';
    }

    if (item === false) {
      return <Redirect to="/404" />;
    }

    return <Item item={item} />;
  }
}

export const ItemContainer = connect(
  ItemContainerComponent,
  {
    item: {
      source: props => `/items/${props.id}`,
    },
  },
);
