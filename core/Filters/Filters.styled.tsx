import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  margin: 0 0 1.5rem 0;
  padding-bottom: 1.5rem;
  letter-spacing: 0.05rem;
  font-size: 1.1rem;
  border-bottom: 0.1rem solid #eee;
  width: 100%;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  line-height: 1.1;

  @media (max-width: 750px) {
    margin: 0 0 1.5rem 0;
  }
`;

export const List = styled.ul`
  margin: 0 0 2.5rem 1.5rem;

  @media (max-width: 750px) {
    margin: 0;
  }
`;
export const Item = styled.li`
  position: relative;
  margin-bottom: 0.3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
export const Link = styled.a`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const Colors = styled.ul`
  padding-bottom: 5px;
  display: block;
  overflow: hidden;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 0;
  }
`;

export const ColorsItem = styled.li`
  float: left;
  clear: none;
  width: 2.5rem;
  height: 2.5rem;
  list-style-type: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

type TColorsLink = {
  bg: string;
};
export const ColorsLink = styled.a<TColorsLink>`
  width: 100%;
  height: 100%;
  display: block;
  border: 1px solid #fff;
  background-color: ${({ bg }) => bg};

  &:hover {
    opacity: 0.8;
  }
`;
