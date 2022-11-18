import { ApiLever } from '@/openapi/models/Lever';

type ApiAgreement = {
  id: string;
  created_date?: string;
  levers: ApiLever[];
};

export type { ApiAgreement };
