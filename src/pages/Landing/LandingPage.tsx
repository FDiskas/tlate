// @flow
import * as React from "react";
import { FloatingButton } from "../../components/FloatingButton/FloatingButton";
import { ItemList } from "../../components/ItemList/ItemList";
export const LandingPage = () => (
  <React.Fragment>
    <ItemList />
    <FloatingButton to="item/create" />
  </React.Fragment>
);
