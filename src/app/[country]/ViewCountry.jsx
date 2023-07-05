import Image from 'next/image';
import PropTypes from 'prop-types';

import { formatNumberWithDots } from '@/utils';
import { ContentLayout, LoadingCircle } from '@/components';

const CountryInfoSection = ({ title = '', content = '' }) => {
  return (
    <div className='flex'>
      <h3 className='text-xs font-semibold'>{title}</h3>
      <p className='ml-2 text-xs text-gray-400'>{content}</p>
    </div>
  );
};

const ViewCountry = ({
  isLoading,
  isSuccess,
  countryData,
  currenciesString,
  router,
}) => {
  return (
    <ContentLayout>
      {isLoading && (
        <div>
          <LoadingCircle className='text-green-300' size='medium' />
        </div>
      )}
      {isSuccess && (
        <>
          <button
            onClick={() => router.push('/')}
            className='mt-4 mb-10 md:mt-0 p-2 px-4 border  border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-500'
          >
            Back
          </button>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <section className='flex flex-col items-center'>
              <Image
                className='w-full h-full'
                src={countryData.flags.svg}
                alt={countryData.flags.alt ?? 'Country'}
                width={500}
                height={500}
                priority={true}
              />
            </section>
            <section>
              <h1 className='text-xl font-semibold'>
                {countryData.name.common}
              </h1>
              <div className='grid grid-cols-2 gap-10'>
                <CountryInfoSection
                  title='Offical Name'
                  content={countryData.name.official}
                />
                <CountryInfoSection
                  title='Population'
                  content={formatNumberWithDots(countryData.population)}
                />
                <CountryInfoSection
                  title='Region'
                  content={countryData.region}
                />
                <CountryInfoSection
                  title='Sub Region'
                  content={countryData.subregion}
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
        </>
      )}
    </ContentLayout>
  );
};

ViewCountry.propTypes = {
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  countryData: PropTypes.object,
  currenciesString: PropTypes.string,
};

export { ViewCountry };
