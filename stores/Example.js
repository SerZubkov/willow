import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';
import { observable, action } from 'mobx';

export class Example extends BaseStore {
  @observable count = 10;

  @action.bound increment() {
    this.count++;
  }

  @action.bound decrement() {
    this.count--;
  }
}

export const getExampleStore = getOrCreateStore('example', Example)