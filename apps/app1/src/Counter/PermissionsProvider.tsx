import { createContext, PropsWithChildren, useContext } from 'react';

import { useAtomValue } from 'jotai';

import { useCounterProvider } from '@/Counter/CounterProvider';

interface IPermissionsContext {
  shouldEnableReset: () => boolean;
}

const PermissionsContext = createContext({} as IPermissionsContext);

const PermissionsProvider = ({ children }: PropsWithChildren) => {
  const { state } = useCounterProvider();
  const value = useAtomValue(state);

  return (
    <PermissionsContext.Provider
      value={{
        shouldEnableReset: () => value !== 0,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

const usePermissionsProvider = () => useContext(PermissionsContext);

export { PermissionsProvider, usePermissionsProvider };
