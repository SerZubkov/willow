import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';

const Wrapper = styled.a`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
`;

const Item = styled.div`
  width: 50%;
  position: relative;
  text-align: right;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const ItemRight = styled(Item)`
  text-align: left;
`;

const H2 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.2rem;
  line-height: 3.8rem;
  letter-spacing: 0.05rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 20px;
  padding: 0;
  text-align: inherit;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  width: calc(100% - 60px);
  top: 50%;
  transform: translate(0, -50%);
  right: 60px;

  @media (max-width: 750px) {
    width: calc(100% - 20px);
    right: 20px;
  }
`;
const ContentRight = styled(Content)`
  right: 0;
  left: 60px;

  @media (max-width: 750px) {
    right: 0;
    left: 20px;
  }
`;
const Image = styled.img`
  min-height: 450px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TwoBigBanner: React.FC = () => {
  return (
    <Wrapper>
      <Item>
        <Image src="/static/hp_half_mens.jpg" alt="half" />
        <Content>
          <H2>
            SHOP <br />
            MEN'S
          </H2>
          <Button theme="black">Подробнее</Button>
        </Content>
      </Item>
      <ItemRight>
        <Image src="/static/hp_half_womens.jpg" alt="half" />
        <ContentRight>
          <H2>
            SHOP <br />
            WOMENS'S
          </H2>
          <Button theme="black">Подробнее</Button>
        </ContentRight>
      </ItemRight>
    </Wrapper>
  );
};

export default TwoBigBanner;
// hp_half_mens
// hp_half_womens
