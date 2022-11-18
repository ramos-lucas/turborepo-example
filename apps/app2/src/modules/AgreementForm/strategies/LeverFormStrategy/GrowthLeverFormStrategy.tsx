import { GrowthLeverHeader } from '@/modules/AgreementForm/components/GrowthLeverHeader';
import { LeverFormStrategy } from '@/modules/AgreementForm/strategies/LeverFormStrategy/LeverFormStrategy';

class GrowthLeverFormStrategy implements LeverFormStrategy {
  renderLeverHeader(): React.ReactElement {
    return <GrowthLeverHeader />;
  }

  renderTarget(): React.ReactElement {
    return <></>;
  }
}

export { GrowthLeverFormStrategy };
