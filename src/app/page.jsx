'use client';
import { ContentLayout, LoadingCircle } from '@/components';
import { useState } from 'react';
import Select from 'react-select';
import { CountryCard } from './CountryCard';
import { useCountries } from '@/API';
import { useRouter } from 'next/navigation';

const regionOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { data: countries, isLoading, isSuccess } = useCountries();

  const handleClickCountry = (country) => {
    router.push(`/${country.name.common}`);
  };
  const handleRegionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSearchQuery('');
  };

  const filteredCountries =
    countries &&
    countries
      .filter(
        (country) =>
          country.name &&
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (country) =>
          !selectedOption ||
          country.region.toLowerCase() === selectedOption.value
      );

  return (
    <ContentLayout>
      <section className='w-full flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/3'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-3 pl-12 text-sm shadow-md text-gray-900 border border-gray-200 rounded-sm focus:border-gray-100'
              placeholder='Search for a country...'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className='w-full  md:w-1/3 mt-4 md:mt-0 flex flex-col md:flex-row md:justify-end md:space-x-2'>
          <Select
            styles={{
              control: (provided) => ({
                ...provided,
                padding: '4px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }),
            }}
            value={selectedOption}
            onChange={handleRegionChange}
            options={regionOptions}
            placeholder='Select region...'
          />
          <button
            onClick={handleReset}
            className='p-2 px-4 border  border-gray-300 rounded-md hover:bg-gray-300 hover:text-gray-500'
          >
            Reset
          </button>
        </div>
      </section>
      {isLoading && (
        <div>
          <LoadingCircle className='text-green-300' size='medium' />
        </div>
      )}

      {isSuccess && (
        <section className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {filteredCountries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              click={() => handleClickCountry(country)}
            />
          ))}
        </section>
      )}
    </ContentLayout>
  );
}
