import { observable, action } from 'mobx';
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';

class Categories extends BaseStore {
  @observable
  categories = [];

  @action
  setCategories = value => {
    this.categories = value;
  };
}

export const getCategoriesStore = getOrCreateStore(
  'categoriesStore',
  Categories
);
