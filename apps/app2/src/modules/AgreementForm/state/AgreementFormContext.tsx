import React, { createContext, useReducer } from 'react';

import { Lever } from '@/modules/AgreementForm/models';
import { Agreement } from '@/modules/AgreementForm/models/Agreements';

type AgreementFormState = { agreement?: Agreement; selectedLever?: Lever };

type IAgreementFormContext = {
  state: AgreementFormState;
  dispatch: React.Dispatch<any>;
};
const AgreementFormContext = createContext({} as IAgreementFormContext);

function reducer(state: AgreementFormState, action: any) {
  switch (action.type) {
    case 'SELECT_LEVER':
      return {
        ...state,
        selectedLever: state.agreement?.levers.find(
          (lever) => lever.id === action.payload.leverId
        ),
      };
    case 'UPDATE_STATE':
      return { ...state, ...action.payload.state };
    default:
      return state;
  }
}

const INITIAL_STATE: AgreementFormState = {
  agreement: {
    id: '',
    levers: [
      { id: '1', type: 'GROWTH' },
      { id: '2', type: 'CUSTOM' },
    ],
  },
  selectedLever: { id: '1', type: 'CUSTOM' },
};

function AgreementFormProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AgreementFormContext.Provider value={{ state, dispatch }}>
      {children}
    </AgreementFormContext.Provider>
  );
}

export { AgreementFormProvider, AgreementFormContext };
