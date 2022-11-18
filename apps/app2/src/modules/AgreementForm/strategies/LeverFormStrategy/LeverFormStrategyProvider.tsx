import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import { AgreementFormContext } from '@/modules/AgreementForm/state/AgreementFormContext';
import {
  CustomLeverFormStrategy,
  GrowthLeverFormStrategy,
  LeverFormStrategy,
  makeLeverFormStrategy,
} from '@/modules/AgreementForm/strategies/LeverFormStrategy';

const LeverFormStrategyContext = createContext<LeverFormStrategy | null>(null);

function LeverFormStrategyProvider({ children }: PropsWithChildren) {
  const { state } = useContext(AgreementFormContext);

  const strategy = useMemo(
    () =>
      (state.selectedLever?.type &&
        makeLeverFormStrategy(state.selectedLever?.type)) ??
      null,
    [state.selectedLever?.type]
  );

  return (
    <LeverFormStrategyContext.Provider value={strategy}>
      {children}
    </LeverFormStrategyContext.Provider>
  );
}

export { LeverFormStrategyProvider, LeverFormStrategyContext };
