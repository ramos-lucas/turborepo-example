import { PrimitiveAtom, useSetAtom } from 'jotai';

import { ICounterState } from '../state';

const useDecrement = (state: PrimitiveAtom<ICounterState>) => {
  const setCounter = useSetAtom(state);
  return () => setCounter((oldValue) => oldValue - 1);
};

export { useDecrement };
