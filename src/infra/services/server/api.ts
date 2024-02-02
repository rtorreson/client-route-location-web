import { _api } from '@/environments/env';
import { HttpClient } from '../http';

export const HttpApiInternal = new HttpClient({
  baseURL: _api,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
