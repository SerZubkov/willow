import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import IconBurger from 'react-css-burger';
import { SIDEBAR } from '../../../../constants/sidebar.constants';

const WrapperIcon = styled.div`
  position: absolute;
  top: -12px;
  left: -10px;
  width: 20px;
  height: 20px;
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;

const toggleBurger = (leftSidebar, toggleLeftSidebar, content) => {
  const body = document.getElementById('app-body');
  toggleLeftSidebar(!leftSidebar, body.scrollTop, content);
};

const Burger = ({ layoutStore: { leftSidebar, toggleLeftSidebar } }) => (
  <WrapperIcon>
    <IconBurger
      onClick={() => toggleBurger(leftSidebar, toggleLeftSidebar, '123')}
      active={leftSidebar}
      burger="slider"
      scale={0.5}
    />
  </WrapperIcon>
);

export default inject('layoutStore')(observer(Burger));
