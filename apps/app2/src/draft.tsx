import React from 'react';

const DependencyContext = React.createContext({});

class AgreementFeatureToggles {
  constructor(private readonly featureToggles: any) {}

  static async retrieveFromApi() {
    const featureToggles = await agreementApi.getFeatureToggles();
    return new AgreementFeatureToggles(featureToggles);
  }

  isTradeLeverEnabled() {
    return this.featureToggles.isTradeLeverEnabled;
  }
}

function DependencyContainer({ children }: React.PropsWithChildren<{}>): React.ReactElement {
  const { selectedLever } = React.useContext(AgreementFormContext);
  const { user } = useAuth();
  const leverFormStrategy = React.useMemo(() => makeLeverFormStrategy(selectedLever.type), [selectedLever]);
  const featureToggles = React.memo(() => AgreementFeatureToggles.retrieveFromApi(), []);

  return <DependencyContext.Provider value={{ leverFormStrategy, featureToggles }}>{children}</DependencyContext.Provider>;
}
