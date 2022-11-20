import * as React from "react";
import classNames from "classnames";
import styles from "./CleanLayout.scss";
import logo from "./assets/logo_placeholder.png";
type Props = {
  children?: React.ReactNode,
};
type State = {
  isActive: boolean,
};
type CleanLayoutState = {
  isActive: boolean,
};
export class CleanLayout extends React.Component<{}, CleanLayoutState> {
  state = {
    isActive: false,
  };
  handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };
  render() {
    const { isActive } = this.state;
    const { children } = this.props;
    const navBarClass = classNames({
      "navbar-menu": true,
      "is-active": isActive,
    });
    const navBurgerClass = classNames({
      "navbar-burger": true,
      "is-active": isActive,
      [styles.burger]: true,
    });
    return (
      <React.Fragment>
        <nav className="navbar is-fixed-top is-black">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src={logo} alt="Useful-useless" />
              </a>
              <a
                href="/"
                className={navBurgerClass}
                aria-expanded="false"
                onClick={this.handleClick}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div className={navBarClass}>
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
                </a>
                <a className="navbar-item" href="/">
                  Items
                </a>
                <a className="navbar-item" href="/">
                  Ratings
                </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <a className="navbar-item" href="/">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="section">
          <div className="container">{children}</div>
        </section>
      </React.Fragment>
    );
  }
}
