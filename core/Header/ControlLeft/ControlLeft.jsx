import React, { Component } from 'react';

import { Wrapper, InputSearch, Control, Count } from './ControlLeft.styles';
import Icon from '../../../helpers/icons';

export default class ControlLeft extends Component {
  render() {
    return (
      <Wrapper>
        <InputSearch type="text" placeholder="SEARCH" />
        <Control>
          <Icon name="basket" />
        </Control>
        <Count>0</Count>
      </Wrapper>
    );
  }
}
