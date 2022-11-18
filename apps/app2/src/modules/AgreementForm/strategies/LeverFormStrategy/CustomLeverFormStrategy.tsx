import { CustomLeverHeader } from '@/modules/AgreementForm/components/CustomLeverHeader';
import { LeverFormStrategy } from '@/modules/AgreementForm/strategies/LeverFormStrategy/LeverFormStrategy';

class CustomLeverFormStrategy implements LeverFormStrategy {
  renderLeverHeader(): React.ReactElement {
    return <CustomLeverHeader />;
  }

  renderTarget(): React.ReactElement {
    return <></>;
  }
}

export { CustomLeverFormStrategy };
