import { PrimitiveAtom, useSetAtom } from 'jotai';

import { ICounterState } from '../state';

const useIncrementBy10 = (state: PrimitiveAtom<ICounterState>) => {
  const setCounter = useSetAtom(state);
  return () => setCounter((oldValue) => oldValue + 10);
};

export { useIncrementBy10 };
