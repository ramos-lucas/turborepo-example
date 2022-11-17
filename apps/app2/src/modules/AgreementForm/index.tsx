import { AgreementFormProvider } from '@/modules/AgreementForm/state/AgreementFormContext';

function AgreementFormModule(): React.ReactElement {
  return (
    <AgreementFormProvider>
      {/* <DependencyContainer>form</DependencyContainer> */}
    </AgreementFormProvider>
  );
}

export { AgreementFormModule };
