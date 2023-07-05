'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/API';
import { ViewCountry } from './ViewCountry';

const ServerComponent = dynamic(() => Promise.resolve(ViewCountry));

export default function Country({ params }) {
  const { country } = params;
  const router = useRouter();
  const { data: countryFetch, isLoading, isSuccess } = useCountry(country);
  const countryData = isSuccess ? countryFetch[0] : null;
  const currencies = Object.values(countryData?.currencies ?? {});
  const currenciesString = currencies.map(({ name }) => name).join(', ');

  return (
    <ServerComponent
      isLoading={isLoading}
      isSuccess={isSuccess}
      countryData={countryData}
      currenciesString={currenciesString}
      router={router}
    />
  );
}
