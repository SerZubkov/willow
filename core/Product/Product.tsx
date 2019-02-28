import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Link } from '../../routes';

const Wrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  transition: all 0.4s;
  display: block;
  width: 100%;
`;

const Tag = styled.div`
  display: block;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.5rem 0.8rem;
  background-color: black;
`;

const ImageHover = styled(Image)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ImageWrapper = styled.div`
  margin: 0 0 10px 0;
  position: relative;
  cursor: pointer;

  &:hover {
    .ImageHover {
      opacity: 1;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`;

const Name = styled.div`
  line-height: 1.8;
  font-weight: 400;
`;

const Small = styled.div`
  line-height: 1.4rem;
  color: #999;
  margin-top: 3px;
`;

type TProps = {
  image: string;
  imageHover: string;
  name: string;
  slug: string;
  color: string;
  price: number;
  newTag?: boolean;
};

const Product: React.FC<TProps> = ({
  image,
  imageHover,
  newTag,
  slug,
  color,
  price,
  name
}) => (
  <Wrapper>
    <Link route="product" params={{ id: slug }}>
      <Fragment>
        <ImageWrapper>
          <Image src={image} alt="image" />
          <ImageHover
            className="ImageHover"
            src={imageHover}
            alt="imageHover"
          />
          {newTag && <Tag>NEW</Tag>}
        </ImageWrapper>
        <Text>
          <Name>{name}</Name>
          <Small>{color}</Small>
          <Small>{price} RUB</Small>
        </Text>
      </Fragment>
    </Link>
  </Wrapper>
);

export default Product;
