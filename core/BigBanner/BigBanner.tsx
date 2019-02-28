import React from 'react';
import styled from 'styled-components';

import { SButton } from '../../components/Button';

const Wrapper = styled.a`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;

  ${SButton} {
    background: ${({ color }) => color};
    color: ${({ color }) => (color === 'white' ? 'black' : 'white')};

    &:hover {
      background-color: ${({ color }) =>
        color === 'white' ? 'black' : 'white'};
      color: ${({ color }) => (color !== 'white' ? 'black' : 'white')};
    }
  }

  @media (max-width: 750px) {
    ${SButton} {
      background: black;
      color: white;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.2rem;
  line-height: 3.8rem;
  letter-spacing: 0.05rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 20px;
  padding: 0;
  text-align: inherit;
  color: ${({ color }) => color};

  @media (max-width: 750px) {
    color: black;
    margin-bottom: 13px;
    font-size: 2rem;
    line-height: 1.1;
  }
`;

const Small = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 0;
  margin-bottom: 25px;
  color: ${({ color }) => color};

  @media (max-width: 750px) {
    color: black;
  }
`;

const Content = styled.div`
  width: calc(100% - 60px);
  position: absolute;
  text-align: left;
  left: 60px;
  top: 50%;
  transform: translate(0, -50%);

  @media (max-width: 1400px) {
    left: 30px;
  }

  @media (max-width: 750px) {
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    transform: none;
    text-align: center;
    margin: 20px 0;
    padding: 0 20px;
  }
`;

const ImageBig = styled.img`
  @media (max-width: 750px) {
    display: none;
  }
`;

const ImageMobile = styled.img`
  display: none;

  @media (max-width: 750px) {
    display: block;
  }
`;

const Image = styled.div`
  width: 100%;

  @media (max-width: 750px) {
    max-height: 450px;
  }

  img {
    min-height: 450px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

type TProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
  imgMobile: string;
  theme?: 'black' | 'white';
};

const BigBanner: React.FC<TProps> = ({
  link,
  desc,
  title,
  img,
  imgMobile,
  theme
}) => {
  return (
    <Wrapper href={link} color={theme}>
      <Image>
        <ImageBig src={img} alt="banner" />
        <ImageMobile src={imgMobile} alt="imageMobile" />
      </Image>
      <Content>
        <H2 color={theme}>{title}</H2>
        <Small color={theme}>{desc}</Small>
        <SButton>Подробнее</SButton>
      </Content>
    </Wrapper>
  );
};

BigBanner.defaultProps = {
  theme: 'white'
};

export default BigBanner;
