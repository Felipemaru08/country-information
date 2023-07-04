import { useQuery } from '@tanstack/react-query';

import { useApiRequest } from '@/hooks';

const getUseCountriesKey = () => {
  return ['/all'];
};

const useCountries = () => {
  const request = useApiRequest();

  return useQuery(getUseCountriesKey(), async ({ signal }) => {
    const qry = '/all';

    const response = await request(qry, 'get', null, {
      signal,
    });

    return response.data;
  });
};

export { useCountries, getUseCountriesKey };
