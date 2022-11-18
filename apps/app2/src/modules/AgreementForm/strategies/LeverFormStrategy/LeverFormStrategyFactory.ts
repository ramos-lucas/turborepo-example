import { Lever } from '@/modules/AgreementForm/models';
import {
  CustomLeverFormStrategy,
  GrowthLeverFormStrategy,
} from '@/modules/AgreementForm/strategies/LeverFormStrategy';
import { LeverFormStrategy } from '@/modules/AgreementForm/strategies/LeverFormStrategy/LeverFormStrategy';

function makeLeverFormStrategy(leverType: Lever['type']): LeverFormStrategy {
  const strategies = {
    GROWTH: GrowthLeverFormStrategy,
    CUSTOM: CustomLeverFormStrategy,
  };
  return new strategies[leverType]();
}

export { makeLeverFormStrategy };
