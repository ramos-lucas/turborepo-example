import { LeverMapper } from '@/modules/AgreementForm/mapper/LeverMapper';
import { Agreement } from '@/modules/AgreementForm/models/Agreements';
import { ApiAgreement } from '@/openapi/models/Agreement';

const AgreementMapper = {
  toApi(agreement: Agreement): ApiAgreement {
    return {
      id: agreement.id,
      levers: agreement.levers.map(LeverMapper.toApi),
    };
  },
  fromApi(dto: ApiAgreement): Agreement {
    return {
      id: dto.id,
      levers: dto.levers.map(LeverMapper.fromApi),
      createdDate: dto.created_date ? new Date(dto.created_date) : undefined,
    };
  },
};

export { AgreementMapper };
