import React from 'react';
import { inject, observer } from 'mobx-react';

import { List } from './Categories.styles';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';

const CategoriesComponent = ({ categoriesStore: { categories } }) => {
  return (
    <List>
      {typeof document !== 'undefined' && <Burger />}
      {categories.map(({ id, name, data }) => (
        <Menu key={id} data={data} name={name} />
      ))}
    </List>
  );
};

export default inject('categoriesStore')(observer(CategoriesComponent));
