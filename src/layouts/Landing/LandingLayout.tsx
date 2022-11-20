import * as React from "react";
type Props = {
  children?: React.ReactNode,
};
export const LandingLayout = ({ children }: Props) => (
  <React.Fragment>
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Useful-Useless</h1>
          <h2 className="subtitle">A garbage collector</h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">{children}</div>
    </section>
  </React.Fragment>
);
