import { PrimitiveAtom, useSetAtom } from 'jotai';

import { ICounterState } from '@/Counter/state';

const useIncrement = (state: PrimitiveAtom<ICounterState>) => {
  const setCounter = useSetAtom(state);
  return () => setCounter((oldValue) => oldValue + 1);
};

export { useIncrement };
