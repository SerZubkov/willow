import styled from 'styled-components';

import { defaultStyle } from '../../../styles/defaultStyle';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${defaultStyle.paddingBase};
  height: 57px;
  display: flex;
  align-items: center;
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
