import { ComponentType } from 'react';

type TComponentWrapper<PInner, POuter> = (component: ComponentType<PInner>) => ComponentType<POuter>;

const identity = <T>(v: T) => v;

export const compose = <PInner = {}, POuter = {}>(...fns: Function[]) =>
  fns.reduce((composedFn, fn) => (...args: any[]) => composedFn(fn(...args)), identity) as TComponentWrapper<PInner, POuter>;

  