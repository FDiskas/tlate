// @flow

import * as React from 'react';

import { UseCase } from '/src/components/UseCase/UseCase';
import { UseCaseForm } from '/src/components/UseCaseForm/UseCaseForm';
import { WindowTools } from '/src/services/Utils/WindowTools';
import type { ItemType } from '/src/components/ItemList/ItemList';

import styles from './Item.scss';
import './Cover.scss';

type ItemProps = {
  item: ItemType,
};

export class Item extends React.Component<ItemProps, {}> {
  componentDidMount() {
    const { item } = this.props;
    WindowTools.setBodyImage(item.image);
  }

  componentWillReceiveProps(newProps: ItemProps) {
    const { item } = this.props;
    if (item.image !== newProps.item.image) {
      WindowTools.setBodyImage(newProps.item.image);
    }
  }

  componentWillUnmount() {
    WindowTools.setBodyImage(null);
  }

  render() {
    const {
      item: { title, subtitle, description, useCases },
    } = this.props;

    return (
      <div>
        <div className={styles.imageSpacer} />
        <h1 className={`title ${styles.isSuper}`}>{title}</h1>
        {subtitle && <p className={`subtitle ${styles.isHighlighted}`}>{subtitle}</p>}
        <div className={`card ${styles.spacedBottom}`}>
          <div className="card-content">
            <div className="content">
              <div>{description}</div>
            </div>
          </div>
        </div>

        <h3 className={`subtitle ${styles.isHighlighted}`}>Use cases</h3>

        <div className="box">
          <UseCaseForm />
        </div>
        {useCases && (
          <div className="box">
            <UseCase />
          </div>
        )}
      </div>
    );
  }
}
