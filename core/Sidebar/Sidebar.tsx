import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Sidebar from '../../components/SideBar';
import Menu from './Menu/Menu';
import { SIDEBAR, TSidebar } from '../../constants/sidebar.constants';

import { TLayoutStore } from '../../stores/Layout.store';

const Wrapper = styled.div`
  padding: 20px;
  width: 280px;
`;

type TMapStateToProps = {
  layoutStore: TLayoutStore;
};

const mapStateToProps = ({ layoutStore }: TMapStateToProps) => ({
  leftSidebar: layoutStore.leftSidebar,
  content: layoutStore.content
});

type TInternalProps = ReturnType<typeof mapStateToProps>;
type TProps = TInternalProps;

const switchContent = (value: TSidebar) => {
  switch (value) {
    case SIDEBAR.MENU:
      return <Menu />;
    case SIDEBAR.FILTERS:
      return <div>123123123123132qaweq</div>;
    default:
      return <Menu />;
  }
};

const SidebarComponent: React.FC<TProps> = ({
  leftSidebar,
  content,
  children
}) => {
  return (
    <Sidebar
      sidebar={<Wrapper>{switchContent(content)}</Wrapper>}
      docked={leftSidebar}
    >
      {children}
    </Sidebar>
  );
};

export default inject(mapStateToProps)(observer(SidebarComponent));
