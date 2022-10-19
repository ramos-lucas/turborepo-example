import { PrimitiveAtom, useSetAtom } from 'jotai';

import { ICounterState } from '@/Counter/state';

const useDecrementBy10 = (state: PrimitiveAtom<ICounterState>) => {
  const setCounter = useSetAtom(state);
  return () => setCounter((oldValue) => oldValue - 10);
};

export { useDecrementBy10 };
