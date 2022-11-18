import { useContext } from 'react';

import { LeverFormStrategyContext } from '@/modules/AgreementForm/strategies/LeverFormStrategy';

function LeverHeader() {
  const strategy = useContext(LeverFormStrategyContext);

  return strategy?.renderLeverHeader() ?? null;
}

export { LeverHeader };
