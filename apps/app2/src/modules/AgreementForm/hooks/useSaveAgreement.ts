import { useContext } from 'react';

import produce from 'immer';

import { Agreement } from '@/models/Agreements';
import { AgreementApi } from '@/modules/AgreementForm/api/AgreementApi';
import { AgreementMapper } from '@/modules/AgreementForm/mapper/AgreementMapper';
import { AgreementFormContext } from '@/modules/AgreementForm/state/AgreementFormContext';
import { validateAgreement } from '@/modules/AgreementForm/validator/AgreementValidator';

function useSaveAgreement() {
  const { dispatch, state } = useContext(AgreementFormContext);
  const { showSnackbar } = useInteraction();
  const agreement = state.agreement as Agreement;

  async function execute() {
    dispatch({ type: 'START_SAVE_LOADING' });
    const errors = validateAgreement(agreement);
    if (errors.length) {
      return dispatch({ type: 'SHOW_VALIDATION_ERRORS', payload: { errors } });
    }

    const apiPayload = AgreementMapper.toApi(agreement);
    const method = state.agreement?.id ? 'update' : 'create';
    try {
      const response = await AgreementApi[method](apiPayload);
      const newState = produce(state, (draft) => {
        (draft.agreement as Agreement).id = response.data.id;
      });
      dispatch({ type: 'UPDATE_AGREEMENT', payload: { newState } });
    } catch (err: any) {
      showSnackbar({ message: err.response.data.message });
    } finally {
      dispatch({ type: 'FINISH_SAVE_LOADING' });
    }
  }

  return execute;
}

export { useSaveAgreement };
