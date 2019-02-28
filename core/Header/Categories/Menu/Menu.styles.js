import styled from 'styled-components';

import { defaultStyle } from '../../../../styles/defaultStyle';

export const Wrapper = styled.div`
  position: absolute;
  top: 57px;
  left: 0;
  height: 288px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid ${defaultStyle.borderColor};
  padding-bottom: 20px;
  transition: 0.2s;
  opacity: 1;
  overflow: hidden;

  @media (max-width: 1400px) {
    justify-content: left;
    padding-left: ${defaultStyle.paddingMd};
    padding-right: 380px;
  }

  @media (max-width: 990px) {
    padding-right: initial;
    top: 47px;
  }
`;

export const MenuWrapper = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 288px;
  width: 288px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:after {
    content: 'НОВИНКИ';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.2s;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    line-height: 288px;
    cursor: pointer;
  }

  &:hover {
    &:after {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Item = styled.div`
  margin-top: 25px;
  padding-right: 30px;
  display: flex;
  max-width: 252px;
  width: 33.3%;
  flex-direction: column;
`;

export const LinkText = styled.div`
  line-height: 1.8rem;
`;

export const Text = styled.div`
  line-height: 22px;
  color: #000;
  text-decoration: none;
  touch-action: manipulation;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
`;

export const ItemBlock = styled.div`
  text-transform: uppercase;
  margin: 0 24px;
  height: 100%;
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
    transform: ${({ isActiveMenu }) => `scaleX(${isActiveMenu ? 1 : 0})`};
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

  @media (max-width: 990px) {
    line-height: 37px;
  }

  @media (max-width: 425px) {
    margin: 0 12px;
  }
`;
