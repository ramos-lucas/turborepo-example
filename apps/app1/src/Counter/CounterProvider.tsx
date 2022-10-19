import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import { PrimitiveAtom } from 'jotai';

import { createCounterState, ICounterState } from '@/Counter/state';
import { useDecrement } from '@/Counter/usecases/useDecrement';
import { useDecrementBy10 } from '@/Counter/usecases/useDecrementBy10';
import { useIncrement } from '@/Counter/usecases/useIncrement';
import { useIncrementBy10 } from '@/Counter/usecases/useIncrementBy10';
import { useReset } from '@/Counter/usecases/useReset';

interface ICounterContext {
  state: PrimitiveAtom<ICounterState>;
  increment: () => void;
  decrement: () => void;
  incrementBy10: () => void;
  decrementBy10: () => void;
  reset: () => void;
}

const CounterContext = createContext({} as ICounterContext);

const CounterProvider = ({ children }: PropsWithChildren) => {
  const state = useMemo(createCounterState, []);

  return (
    <CounterContext.Provider
      value={{
        state,
        increment: useIncrement(state),
        decrement: useDecrement(state),
        incrementBy10: useIncrementBy10(state),
        decrementBy10: useDecrementBy10(state),
        reset: useReset(state),
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const useCounterProvider = () => useContext(CounterContext);

export { CounterProvider, useCounterProvider };
