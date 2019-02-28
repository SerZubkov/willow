import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import { TLayoutStore } from '../../stores/Layout.store';

type TAppStyle = {
  scrollMobile: boolean;
};

export const AppStyle = styled.div<TAppStyle>`
  padding-top: 57px;
  position: relative;
  height: 100%;
  overflow: ${({ scrollMobile }) => (scrollMobile ? 'hidden' : 'auto')};
  background-color: white;

  @media (max-width: 990px) {
    padding-top: 56px;
  }
`;

type TMapStateToProps = {
  layoutStore: TLayoutStore;
};

const mapStateToProps = ({ layoutStore }: TMapStateToProps) => ({
  scrollMobile: layoutStore.scrollMobile
});

type TInternalProps = ReturnType<typeof mapStateToProps>;
type TProps = TInternalProps;

const App: React.FC<TProps> = ({ children, scrollMobile }) => (
  <AppStyle id="app-body" scrollMobile={scrollMobile}>
    {children}
  </AppStyle>
);

export default inject(mapStateToProps)(observer(App));
