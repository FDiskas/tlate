import * as React from "react";
import { NumberTools } from "../../services/Utils/NumberTools";
export const UseCase = () => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>John Smith</strong>
          &nbsp;
          <small>@johnsmith</small>
          &nbsp;
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
    </div>
    <div className="media-right">
      <a className="level-item" href="/">
        <span className="icon is-small">
          <i className="fa fa-thumbs-up" />
        </span>
      </a>
      <span className="has-text-grey">
        {NumberTools.abbreviateNumber(147296)}
      </span>
    </div>
  </article>
);
