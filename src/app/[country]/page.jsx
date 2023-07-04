'use client';

import { useCountry } from '@/API';
import { ContentLayout, LoadingCircle } from '@/components';
import Image from 'next/image';

const CountryInfoSection = ({ title = '', content = '' }) => {
  return (
    <div className='flex'>
      <h3 className='text-xs font-semibold'>{title}</h3>
      <p className='ml-2 text-xs text-gray-400'>{content}</p>
    </div>
  );
};

export default function Country({ params }) {
  const { country } = params;
  const { data: countryFetch, isLoading, isSuccess } = useCountry(country);
  const countryData = isSuccess ? countryFetch[0] : null;
  const currencies = Object.values(countryData?.currencies ?? {});
  const currenciesString = currencies.map(({ name }) => name).join(', ');

  return (
    <ContentLayout>
      {isLoading && (
        <div>
          <LoadingCircle className='text-green-300' size='medium' />
        </div>
      )}
      {isSuccess && (
        <div className='grid grid-cols-2 gap-12 items-center'>
          <section className='flex flex-col items-center'>
            <Image
              className='w-full h-full'
              src={countryData.flags.svg}
              alt={countryData.flags.alt}
              width={500}
              height={500}
            />
            <Image
              className='w-64 h-full mt-5'
              src={countryData.coatOfArms.svg}
              alt={countryData.flags.alt}
              width={100}
              height={100}
            />
          </section>
          <section>
            <h1 className='text-xl font-semibold'>{countryData.name.common}</h1>
            <div className='grid grid-cols-2 gap-20'>
              <CountryInfoSection
                title='Offical Name'
                content={countryData.name.official}
              />
              <CountryInfoSection
                title='Population'
                content={countryData.population}
              />
              <CountryInfoSection title='Region' content={countryData.region} />
              <CountryInfoSection
                title='Sub Region'
                content={countryData.subRegion}
              />
              <CountryInfoSection
                title='Capital'
                content={countryData.capital}
              />
              <CountryInfoSection title='Area' content={countryData.area} />
              <CountryInfoSection
                title='Currencies'
                content={currenciesString}
              />
              <CountryInfoSection
                title='Languages'
                content={Object.values(countryData.languages).join(', ')}
              />
            </div>
          </section>
        </div>
      )}
    </ContentLayout>
  );
}
