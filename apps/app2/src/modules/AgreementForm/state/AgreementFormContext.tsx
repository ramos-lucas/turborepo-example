import React, { createContext, useReducer } from 'react';

import { Agreement } from '@/models/Agreements';

type AgreementFormState = { agreement?: Agreement };

type IAgreementFormContext = {
  state: AgreementFormState;
  dispatch: React.Dispatch<any>;
};
const AgreementFormContext = createContext({} as IAgreementFormContext);

function reducer(state: AgreementFormState, action: any) {
  return state;
}

function AgreementFormProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AgreementFormContext.Provider value={{ state, dispatch }}>
      {children}
    </AgreementFormContext.Provider>
  );
}

export { AgreementFormProvider, AgreementFormContext };
