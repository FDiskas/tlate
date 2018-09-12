// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.scss';

export const NotFoundPage = () => (
  <section className="section">
    <h1 className={`title ${styles.isSuper}`}>404</h1>
    <p className={`${styles.isHighlighted}`}>Sorry, the thing you`re looking for was not found.</p>
    <hr />
    <p>
      You can try returning <Link to="/">home</Link> to continue your search for glory.
    </p>
  </section>
);
