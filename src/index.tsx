/* eslint-disable */
// @flow
import * as React from "react";
import { render } from "react-dom";
import { App } from "./root/App";
const root = document.getElementById("app") || document.createElement("div");
function renderApp() {
  render(<App />, root);
}
renderApp();
