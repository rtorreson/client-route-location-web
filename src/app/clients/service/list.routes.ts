import { _api } from '@/environments/env';
import { HttpApiInternal } from '@/infra/services';
import { Contact } from '../types';

export const listRoutes = async () => {
  const { data } = await HttpApiInternal.request({
    method: 'GET',
    url: '/calculate-route',
  });
  return data.orderedCoordinates as Contact[];
};
