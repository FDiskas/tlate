// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import type { ItemType } from '/src/components/ItemList/ItemList';
import styles from './ItemCard.scss';

interface ItemCardProps {
  item: ItemType;
}
export const ItemCard = ({ item: { id, title, image, description } }: ItemCardProps) => (
  <Link to={`item/${id}`} className={`card ${styles.block}`}>
    <div className="card-image">
      <div className="image is-16by9">
        <img src={image} alt={title} />
      </div>
    </div>
    <div className="card-content">
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </Link>
);
