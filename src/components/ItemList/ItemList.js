// @flow

import * as React from 'react';

import { connect } from '/src/root/connect';
import { ItemCard } from '../ItemCard/ItemCard';

export type ItemType = {
  id: string,
  title: string,
  subtitle: string,
  description: React.Node,
  image: string,
  useCases?: string[],
};

export interface ItemListProps {
  items: ItemType[];
}

export class ItemListComponent extends React.Component<ItemListProps, {}> {
  render() {
    const { items } = this.props;
    if (!items) {
      return false;
    }

    return (
      <div className="columns is-multiline">
        {items.map(item => (
          <div key={`item${item.id}`} className="column is-one-third">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    );
  }
}

export const ItemList = connect(
  ItemListComponent,
  {
    items: {
      source: '/items',
    },
  },
);
