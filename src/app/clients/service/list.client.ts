import { _api } from '@/environments/env';
import { HttpApiInternal } from '@/infra/services';
import { Contact } from '../types';

export const listContact = async () => {
  const { data } = await HttpApiInternal.request({
    method: 'GET',
    url: '/client',
  });
  return data.results as Contact;
};
