import { useContext } from 'react';

import { AgreementFormContext } from '@/modules/AgreementForm/state/AgreementFormContext';
import { useSelectLever } from '@/modules/AgreementForm/usecases/useSelectLever';

function LeverList() {
  const { state } = useContext(AgreementFormContext);
  const selectLever = useSelectLever();

  return (
    <ul>
      {state.agreement?.levers.map((lever) => (
        <li key={lever.id}>
          <button onClick={() => selectLever(lever.id)}>
            {lever.id} {lever.type}
          </button>
        </li>
      ))}
    </ul>
  );
}

export { LeverList };
