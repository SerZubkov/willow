import styled from 'styled-components';

import { defaultStyle } from '../../../styles/defaultStyle';

export const Wrapper = styled.div`
  position: absolute;
  top: 4px;
  right: ${defaultStyle.paddingBase};
  height: 57px;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    right: ${defaultStyle.paddingMd};
  }

  @media (max-width: 990px) {
    height: 50px;
  }
`;

export const InputSearch = styled.input`
  width: 72px;
  height: 34px;
  border: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  transition: 0.2s;
  padding: 10px;

  &:focus {
    width: 125px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Control = styled.div`
  display: flex;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const Count = styled.div`
  font-size: 1.2rem;
  padding-left: 4px;
  color: #999;
`;
