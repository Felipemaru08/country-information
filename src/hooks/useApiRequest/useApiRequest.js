import axios from 'axios';

import { APP_API_URL } from '@/constants';

const useApiRequest = () => {
  const request = async (url, method = 'get', data = null, options = {}) => {
    const headers = {
      Authorization: '',
    };
    const config = {
      method,
      url,
      baseURL: APP_API_URL,
      headers,
      ...options,
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);

    return response;
  };

  return request;
};

export { useApiRequest };
