import { _api } from '@/environments/env';
import { HttpApiInternal } from '@/infra/services';
import { Contact } from '../types';

export const addContact = async (query: Contact) => {
  const { data } = await HttpApiInternal.request<Contact>({
    method: 'POST',
    url: '/add',
    data: query,
  });
  return data;
};
