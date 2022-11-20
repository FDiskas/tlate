// @flow
import * as React from "react";
import { ItemForm } from "/src/components/ItemForm/ItemForm";
import { Item } from "/src/components/Item/Item";
type State = {
  title?: string,
  subtitle?: string,
  image?: string,
};
type ItemCreateContainerState = {
  title: undefined,
  subtitle: undefined,
  image: undefined,
};
export class ItemCreateContainer extends React.Component<
  {},
  ItemCreateContainerState
> {
  state = {
    title: undefined,
    subtitle: undefined,
    image: undefined,
  };
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value.trim(),
    });
  };
  render() {
    const { title, subtitle, image } = this.state;
    return (
      <Item
        item={{
          id: "new",
          title: title || "Create new item",
          subtitle: subtitle || "Fill this form to create a new item",
          description: <ItemForm handleChange={this.handleChange} />,
          image: image || "http://placehold.it/1920x1080?text=Image goes here",
        }}
      />
    );
  }
}
