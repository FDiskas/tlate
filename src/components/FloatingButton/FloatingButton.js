// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './FloatingButton.scss';

export function FloatingButton({ to }: { to: string }) {
  return (
    <Link to={to} className={`button is-danger is-large ${styles.plusButton}`}>
      <span className="icon">
        <i className="fa fa-plus" />
      </span>
    </Link>
  );
}
