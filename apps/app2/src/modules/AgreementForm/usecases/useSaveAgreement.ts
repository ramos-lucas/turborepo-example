import { useContext } from 'react';

import produce from 'immer';

import { AgreementApi } from '@/modules/AgreementForm/api';
import { AgreementMapper } from '@/modules/AgreementForm/mapper';
import { Agreement } from '@/modules/AgreementForm/models';
import { AgreementFormContext } from '@/modules/AgreementForm/state/AgreementFormContext';
import { validateAgreement } from '@/modules/AgreementForm/validator';

function useSaveAgreement() {
  const { dispatch, state } = useContext(AgreementFormContext);
  const agreement = state.agreement as Agreement;

  async function execute() {
    dispatch({ type: 'START_SAVE_LOADING' });

    const errors = validateAgreement(agreement);
    if (errors.length) {
      return dispatch({ type: 'SHOW_VALIDATION_ERRORS', payload: { errors } });
    }

    try {
      const method = agreement.id ? 'update' : 'create';
      const response = await AgreementApi[method](
        AgreementMapper.toApi(agreement)
      );

      const newState = produce(state, (draft) => {
        draft.agreement = AgreementMapper.fromApi(response.data);
      });
      dispatch({ type: 'UPDATE_AGREEMENT', payload: { newState } });
    } catch (err: any) {
      // showSnackbar({ message: err.response.data.message });
    } finally {
      dispatch({ type: 'FINISH_SAVE_LOADING' });
    }
  }

  return execute;
}

export { useSaveAgreement };
