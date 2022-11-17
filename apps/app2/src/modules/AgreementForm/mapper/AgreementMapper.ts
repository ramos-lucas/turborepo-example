import { Agreement } from '@/models/Agreements';

const AgreementMapper = {
  toApi(agreement: Agreement) {
    return agreement;
  },
};

export { AgreementMapper };
