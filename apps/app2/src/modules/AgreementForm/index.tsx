import { LeverHeader } from '@/modules/AgreementForm/components/LeverHeader';
import { LeverList } from '@/modules/AgreementForm/components/LeverList';
import { AgreementFormProvider } from '@/modules/AgreementForm/state/AgreementFormContext';
import { LeverFormStrategyProvider } from '@/modules/AgreementForm/strategies/LeverFormStrategy';

function AgreementFormModule(): React.ReactElement {
  return (
    <AgreementFormProvider>
      <LeverFormStrategyProvider>
        <LeverHeader />
        <LeverList />
      </LeverFormStrategyProvider>
    </AgreementFormProvider>
  );
}

export { AgreementFormModule };
