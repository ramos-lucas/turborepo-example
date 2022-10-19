import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import { PrimitiveAtom } from 'jotai';

import { createCounterState, ICounterState } from './state';
import { useDecrement } from './usecases/useDecrement';
import { useDecrementBy10 } from './usecases/useDecrementBy10';
import { useIncrement } from './usecases/useIncrement';
import { useIncrementBy10 } from './usecases/useIncrementBy10';
import { useReset } from './usecases/useReset';

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
