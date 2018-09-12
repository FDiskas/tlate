// @flow

import * as React from 'react';
import { ItemForm } from '../components/ItemForm/ItemForm';
import { Item } from '../components/Item/Item';

type State = {
  title?: string,
  subtitle?: string,
  image?: string,
};

export class ItemCreateContainer extends React.Component<{}, State> {
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
          id: 'new',
          title: title || 'Create new item',
          subtitle: subtitle || 'Fill this form to create a new item',
          description: <ItemForm handleChange={this.handleChange} />,
          image: image || 'http://placehold.it/1920x1080?text=Image goes here',
        }}
      />
    );
  }
}
