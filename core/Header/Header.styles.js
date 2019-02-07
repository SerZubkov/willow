import styled from 'styled-components';

import { defaultStyle } from '../../styles/defaultStyle';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 57px;
  display: flex;
  border-bottom: 1px solid ${defaultStyle.borderColor};
  justify-content: center;
  padding: 0 ${defaultStyle.paddingBase};
  align-items: center;
  background-color: white;
`;

export const Logo = styled.div`
  width: 100px;
  height: 46px;
  background-color: red;
  position: absolute;
  top: 6px;
  left: ${defaultStyle.paddingBase};
`;
