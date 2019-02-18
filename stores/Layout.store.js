import { observable, action, runInAction } from 'mobx';
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';

class Layout extends BaseStore {
  @observable
  leftSidebar = false;

  @observable
  scrollMobile = false;

  @observable
  topBody = 0;

  @observable
  mql =
    typeof window !== 'undefined' && window.matchMedia('(min-width: 990px)');

  @action
  toggleLeftSidebar = (value = !this.leftSidebar, topBody) => {
    this.leftSidebar = value;
    console.log('topBody', topBody);
    if (value) {
      this.scrollMobile = true;
      runInAction(() => {
        this.topBody = topBody;
      });
    } else {
      setTimeout(() => {
        runInAction(() => {
          this.scrollMobile = false;
          this.topBody = 0;
        });
      }, 300);
    }
  };
}

export const getLayoutStore = getOrCreateStore('layoutStore', Layout);
