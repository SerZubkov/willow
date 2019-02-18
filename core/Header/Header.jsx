import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Wrapper, Logo } from './Header.styles';

import Categories from './Categories/Categories';
import ControlLeft from './ControlLeft/ControlLeft';

import { headerData } from './Header.mock';

@inject('categoriesStore', 'layoutStore')
@observer
class Header extends Component {
  componentDidMount() {
    const {
      categoriesStore: { setCategories }
    } = this.props;
    setCategories(headerData);
  }

  render() {
    const {
      layoutStore: { scrollMobile, topBody }
    } = this.props;
    return (
      <Wrapper absoluteActive={scrollMobile} topBody={topBody}>
        <Logo>
          <div>Logo</div>
        </Logo>
        <Categories />
        <ControlLeft />
      </Wrapper>
    );
  }
}

export default Header;
