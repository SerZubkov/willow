import React, { Component } from 'react';

import { List, Item } from './Categories.styles';

export default class Categories extends Component {
  render() {
    return (
      <List>
        <Item>Mens</Item>
        <Item>Womens</Item>
        <Item>Accessories</Item>
      </List>
    );
  }
}
