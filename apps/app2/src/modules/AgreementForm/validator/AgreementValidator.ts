import { Agreement } from '@/modules/AgreementForm/models/Agreements';

type Errors = string[];

function validateAgreement(agreement: Agreement) {
  const errors: Errors = [];
  if (!agreement.levers) errors.push('missing at least one lever');
  return errors;
}

export { validateAgreement };
