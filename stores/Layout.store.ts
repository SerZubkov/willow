import { observable, action, runInAction } from 'mobx';
// @ts-ignore
import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';

type Content = 'MENU' | 'FILTERS';

type ToggleLeftSidebar = (
  value: boolean,
  topBody: number,
  content: Content
) => void;

class Layout extends BaseStore {
  @observable
  leftSidebar = false;

  @observable
  scrollMobile = false;

  @observable
  topBody: number = 0;

  @observable
  content: Content = 'MENU';

  @observable
  mql =
    typeof window !== 'undefined' && window.matchMedia('(min-width: 990px)');

  @action
  toggleLeftSidebar: ToggleLeftSidebar = (
    value = !this.leftSidebar,
    topBody,
    content
  ) => {
    this.leftSidebar = value;
    if (value) {
      this.scrollMobile = true;
      runInAction(() => {
        this.topBody = topBody;
        this.content = content;
      });
    } else {
      setTimeout(() => {
        runInAction(() => {
          this.scrollMobile = false;
          this.topBody = 0;
        });
      }, 500);
    }
  };
}

export const getLayoutStore = getOrCreateStore('layoutStore', Layout);
export type TLayoutStore = InstanceType<typeof Layout>;
