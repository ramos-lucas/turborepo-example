import { atom } from 'jotai';

type ICounterState = number;

const createCounterState = () => atom<ICounterState>(0);

export { createCounterState };
export type { ICounterState };
