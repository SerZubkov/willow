import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import IconBurger from 'react-css-burger';

const WrapperIcon = styled.div`
  position: absolute;
  top: -65px;
  left: -10px;
  width: 20px;
  height: 20px;
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;

const toggleBurger = (leftSidebar, toggleLeftSidebar) => {
  const body = document.getElementById('app-body');
  toggleLeftSidebar(!leftSidebar, body.scrollTop);
};

const Burger = ({ layoutStore: { leftSidebar, toggleLeftSidebar } }) => (
  <WrapperIcon>
    <IconBurger
      onClick={() => toggleBurger(leftSidebar, toggleLeftSidebar)}
      active={leftSidebar}
      burger="slider"
      scale={0.5}
    />
  </WrapperIcon>
);

export default inject('layoutStore')(observer(Burger));
