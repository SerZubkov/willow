import React from 'react';
import {
  Wrapper,
  Title,
  List,
  Link,
  Item,
  Colors,
  ColorsItem,
  ColorsLink
} from './Filters.styled';

type TCategory = {
  id: number;
  name: string;
  link: string;
};
type TCollection = {
  id: number;
  name: string;
  link: string;
};
type TColors = {
  id: number;
  link: string;
  color: string;
};
type TProps = {
  category?: TCategory[];
  collection?: TCollection[];
  colors?: TColors[];
};

const renderCategory = (category: TCategory[], title: string) => (
  <div>
    <Title>{title}</Title>
    <List>
      {category.map(item => (
        <Item key={item.id}>
          <Link href={item.link}>{item.name}</Link>
        </Item>
      ))}
    </List>
  </div>
);

const renderColor = (colors: TColors[], title: string) => (
  <div>
    <Title>{title}</Title>
    <Colors>
      {colors.map(item => (
        <ColorsItem key={item.id}>
          <ColorsLink bg={item.color} />
        </ColorsItem>
      ))}
    </Colors>
  </div>
);

const Filters: React.FC<TProps> = ({ category, collection, colors }) => (
  <Wrapper>
    {category && category.length > 0
      ? renderCategory(category, 'SHOP BY CATEGORY')
      : null}
    {colors && colors.length > 0
      ? renderColor(colors, 'FILTER BY COLOUR')
      : null}
    {collection && collection.length > 0
      ? renderCategory(collection, 'Filter By Collection')
      : null}
  </Wrapper>
);

export default Filters;
