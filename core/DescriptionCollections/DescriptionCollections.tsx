import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 30px;
  padding: 0 60px;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    padding: 0 30px;
  }

  @media (max-width: 750px) {
    padding: 0 20px;
    padding-bottom: 0;
  }
`;

const Small = styled.div`
  font-size: 10px;
  color: #999;
`;

const Desc = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin: 0 0 20px;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  display: block;
  width: 100%;
  margin: 1.5rem 0;
  letter-spacing: 0.025rem;
`;

type TProps = {
  genusName: string;
  name: string;
  desc: string;
};

const DescriptionCollections: React.FC<TProps> = ({
  genusName,
  name,
  desc
}) => (
  <Wrapper>
    <Small>{genusName}</Small>
    <Title>{name}</Title>
    <Desc>{desc}</Desc>
  </Wrapper>
);

export default DescriptionCollections;
