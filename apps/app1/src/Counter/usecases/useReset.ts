import { PrimitiveAtom, useSetAtom } from 'jotai';

import { ICounterState } from '@/Counter/state';

const useReset = (state: PrimitiveAtom<ICounterState>) => {
  const setCounter = useSetAtom(state);
  return () => setCounter(0);
};

export { useReset };
