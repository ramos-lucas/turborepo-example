import { useContext } from 'react';

import produce from 'immer';

import { Lever } from '@/modules/AgreementForm/models';
import { AgreementFormContext } from '@/modules/AgreementForm/state/AgreementFormContext';

function useSelectLever() {
  const { state, dispatch } = useContext(AgreementFormContext);

  function execute(leverId: Lever['id']) {
    // manipulando estado no hook
    const newState = produce(state, (draft) => {
      draft.selectedLever = draft.agreement?.levers.find(
        ({ id }) => id === leverId
      );
    });
    dispatch({ type: 'UPDATE_STATE', payload: { state: newState } });

    // manipulando estado no reducer
    // dispatch({ type: 'SELECT_LEVER', payload: { leverId } });
  }

  return execute;
}

export { useSelectLever };
