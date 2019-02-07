import React, { Component } from 'react';

import { Wrapper, Logo } from './Header.styles';

import Categories from './Categories/Categories';
import ControlLeft from './ControlLeft/ControlLeft';

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <Categories />
        <ControlLeft />
      </Wrapper>
    );
  }
}
