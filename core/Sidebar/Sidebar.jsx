import React from 'react';
import Sidebar from 'react-sidebar';
import { inject, observer } from 'mobx-react';

const SidebarComponent = ({ layoutStore: { leftSidebar }, children }) => {
  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      docked={leftSidebar}
      styles={{ sidebar: { background: 'white' } }}
    >
      {children}
    </Sidebar>
  );
};

export default inject('layoutStore')(observer(SidebarComponent));
