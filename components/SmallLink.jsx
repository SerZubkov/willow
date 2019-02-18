import styled from 'styled-components';

export const SmallLink = styled.a`
  color: #999;
  text-decoration: none;
  touch-action: manipulation;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.1s cubic-bezier(0.44, 0.13, 0.48, 0.87);

  &:hover {
    color: #000;
  }
`;
