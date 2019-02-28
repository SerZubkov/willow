import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Wrapper, Logo } from './Header.styles';

import Categories from './Categories/Categories';
import ControlLeft from './ControlLeft/ControlLeft';

import { headerData } from './Header.mock';
import { TLayoutStore } from '../../stores/Layout.store';

type TMapStateToProps = {
  layoutStore: TLayoutStore;
  categoriesStore: TLayoutStore;
};

const mapStateToProps = ({ layoutStore }: TMapStateToProps) => ({
  leftSidebar: layoutStore.leftSidebar,
  content: layoutStore.content
});

type TInternalProps = ReturnType<typeof mapStateToProps>;
type TProps = TInternalProps;

@inject('categoriesStore', 'layoutStore')
@observer
class Header extends Component<TProps> {
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
