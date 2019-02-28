import React from 'react';
import styled from 'styled-components';

import Head from '../components/head';
import Wrapper from '../components/Wrapper';
import DescriptionCollections from '../core/DescriptionCollections/DescriptionCollections';
import Filters from '../core/Filters/Filters';
import Product from '../core/Product/Product';

// mock data
import { collection, filters, catalog } from '../mock/main';

const Content = styled.div`
  position: relative;
  display: flex;
  margin: 20px 60px 0 60px;

  @media (max-width: 1400px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-right: 20px;
  }
`;

const WrapperRight = styled.div`
  width: 83.33333%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Item = styled.div`
  width: 33.33%;
  padding-left: 30px;

  @media (max-width: 990px) {
    width: 50%;
    padding-left: 20px;
  }
`;

const WrapperLeft = styled.div`
  width: 16.66667%;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Affix = styled.div`
  position: sticky;
  top: 20px;
  margin-bottom: 50px;
`;

export default () => (
  <Wrapper>
    <Head title="Home" />
    <DescriptionCollections
      name={collection.name}
      genusName={collection.genusName}
      desc={collection.desc}
    />
    <Content>
      <WrapperLeft>
        <Affix>
          <Filters
            category={filters.category}
            colors={filters.colors}
            collection={filters.collection}
          />
        </Affix>
      </WrapperLeft>
      <WrapperRight>
        {catalog.map(item => (
          <Item key={item.id}>
            <Product {...item} />
          </Item>
        ))}
      </WrapperRight>
    </Content>
  </Wrapper>
);
