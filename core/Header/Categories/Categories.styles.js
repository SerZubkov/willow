import styled from 'styled-components';

import { defaultStyle } from '../../../styles/defaultStyle';

export const List = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  text-transform: uppercase;
  margin: 0 24px;
  height: 57px;
  line-height: 47px;
  font-size: 1.1rem;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: 0.2s;
  position: relative;
  padding-top: 6px;

  &:after {
    content: '';
    transition: 0.2s;
    position: absolute;
    transform: scaleX(0);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 5px solid ${defaultStyle.baseColor};
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
