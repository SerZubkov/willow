import styled from 'styled-components';

import { defaultStyle } from '../../styles/defaultStyle';

type TWrapper = {
  absoluteActive: boolean;
  topBody: string;
};

export const Wrapper = styled.div<TWrapper>`
  position: ${({ absoluteActive }) => (absoluteActive ? 'absolute' : 'fixed')};
  left: 0;
  right: 0;
  top: ${({ topBody }) => `${topBody}px`};
  width: 100vw;
  height: 57px;
  display: flex;
  border-bottom: 1px solid ${defaultStyle.borderColor};
  justify-content: center;
  padding: 0 ${defaultStyle.paddingBase};
  align-items: center;
  background-color: white;
  z-index: 100;

  @media (max-width: 1400px) {
    padding: 0 ${defaultStyle.paddingMd};
  }

  @media (max-width: 990px) {
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 46px;
  position: absolute;
  top: 6px;
  left: ${defaultStyle.paddingBase};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    left: ${defaultStyle.paddingMd};
  }

  @media (max-width: 990px) {
    height: 56px;
    width: 100%;
    left: 0;
    top: 0;
    background-color: white;
  }
`;
