import React from 'react';
import styled from 'styled-components';

import Product from '../Product/Product';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  padding: 0 60px;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
    padding: 0;
    padding-right: 20px;
  }
`;

const Item = styled.div`
  width: 25%;
  padding-left: 30px;

  @media (max-width: 990px) {
    width: 50%;
    padding-left: 20px;
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.025rem;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

type TData = {
  id: number;
  image: string;
  imageHover: string;
  name: string;
  slug: string;
  color: string;
  price: number;
};

type TProps = {
  data?: TData[];
};

const Releases: React.FC<TProps> = ({ data }) => (
  <Wrapper>
    <Item>
      <Text>Новинки</Text>
    </Item>
    {data &&
      data.map(item => (
        <Item key={item.id}>
          <Product {...item} />
        </Item>
      ))}
  </Wrapper>
);

export default Releases;
