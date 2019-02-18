import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

export const AppStyle = styled.div`
  padding-top: 57px;
  position: relative;
  height: 100%;
  overflow: ${({ scrollMobile }) => (scrollMobile ? 'hidden' : 'auto')};

  @media (max-width: 990px) {
    padding-top: 94px;
  }
`;

const App = ({ children, layoutStore: { scrollMobile } }) => (
  <AppStyle id="app-body" scrollMobile={scrollMobile}>
    {children}
  </AppStyle>
);

export default inject('layoutStore')(observer(App));
