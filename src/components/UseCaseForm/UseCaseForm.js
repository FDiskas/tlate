// @flow

import * as React from 'react';

import styles from './UseCaseForm.scss';

type UseCaseFormState = {
  color: number,
};

export class UseCaseForm extends React.Component<{}, UseCaseFormState> {
  state = {
    color: 0,
  };

  componentWillMount() {
    this.intervalHandle = setInterval(() => {
      this.setState({
        color: Math.floor(Math.random() * 5),
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  intervalHandle: IntervalID;

  generateClass() {
    const { color } = this.state;

    switch (color) {
      case 0:
        return 'is-info';
      case 1:
        return 'is-danger';
      case 2:
        return 'is-primary';
      case 3:
        return 'is-warning';
      default:
        return 'is-info';
    }
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Write your own use case..." />
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <button type="submit" className={`button ${styles.backgroundTransition} ${this.generateClass()}`}>
                  Submit
                </button>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <label className="checkbox" htmlFor="submitUseCase">
                  <input type="checkbox" /> Randomly add new line or submit while I type
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}
