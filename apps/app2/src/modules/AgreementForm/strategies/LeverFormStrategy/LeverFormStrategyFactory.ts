import { GrowthLeverFormStrategy } from '@/modules/AgreementForm/strategies/LeverFormStrategy/GrowthLeverFormStrategy';
import { LeverFormStrategy } from '@/modules/AgreementForm/strategies/LeverFormStrategy/LeverFormStrategy';

function makeLeverFormStrategy(leverType: 'GROWTH'): LeverFormStrategy {
  const strategies = {
    GROWTH: GrowthLeverFormStrategy,
  };
  return new strategies[leverType]();
}

export { makeLeverFormStrategy };
