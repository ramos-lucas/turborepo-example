import { Lever } from '@/modules/AgreementForm/models/Lever';
import { ApiLever } from '@/openapi/models/Lever';

enum LeverType {
  GROWTH = 1,
  CUSTOM = 2,
}

const LeverMapper = {
  toApi(lever: Lever): ApiLever {
    return { id: lever.id, type: LeverType[lever.type] };
  },
  fromApi(dto: ApiLever): Lever {
    return { id: dto.id, type: LeverType[dto.type] as Lever['type'] };
  },
};

export { LeverMapper };
