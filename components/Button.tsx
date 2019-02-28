import React from 'react';
import styled from 'styled-components';

export const SButton = styled.button`
  appearance: none;
  display: inline-block;
  width: auto;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 0;
  transition: 0.1s cubic-bezier(0.44, 0.13, 0.48, 0.87);
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  min-width: 150px;
  padding: 0 0.8rem;
  letter-spacing: 0.025rem;
  line-height: 4.5rem;
  height: 4.5rem;
  font-family: 'Montserrat', sans-serif;
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
    color: ${({ color }) => color};
  }
`;

type TProps = {
  theme?: 'white' | 'black';
};

const Button: React.FC<TProps> = ({ children, theme }) => {
  return <SButton color={theme}>{children}</SButton>;
};

Button.defaultProps = {
  theme: 'white'
};

export default Button;
