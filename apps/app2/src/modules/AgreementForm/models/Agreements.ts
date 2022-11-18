import { Lever } from '@/modules/AgreementForm/models/Lever';

type Agreement = {
  id: string;
  levers: Lever[];
  createdDate?: Date;
};

export type { Agreement };
