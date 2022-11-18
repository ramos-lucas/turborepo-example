import crypto from 'node:crypto';

import { ApiAgreement } from '@/openapi/models/Agreement';

const AgreementApi = {
  create: (agreement: ApiAgreement) =>
    Promise.resolve({
      data: {
        ...agreement,
        id: crypto.randomUUID(),
        created_date: new Date().toISOString(),
      },
    }),
  update: (agreement: ApiAgreement) => Promise.resolve({ data: agreement }),
};

export { AgreementApi };
