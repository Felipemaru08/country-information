import { useQuery } from '@tanstack/react-query';
import { useApiRequest } from '@/hooks';

const getUseCountryKey = (country) => {
  return [`/name/${country}`];
};

const useCountry = (country) => {
  const request = useApiRequest();

  return useQuery(
    getUseCountryKey(country),
    async ({ signal }) => {
      const query = `/name/${country}`;

      const response = await request(query, 'get', null, {
        signal,
      });

      return response.data;
    },
    {
      refetchOnMount: true,
    }
  );
};

export { useCountry, getUseCountryKey };
