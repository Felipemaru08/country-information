'use client';
import { useState } from 'react';

import { useCountries } from '@/API';
import { useRouter } from 'next/navigation';
import { ViewDashboard } from './Dashboard';
import dynamic from 'next/dynamic';

const regionOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const ServerComponent = dynamic(() => Promise.resolve(ViewDashboard));

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
    <ServerComponent
      searchQuery={searchQuery}
      handleSearchChange={handleSearchChange}
      selectedOption={selectedOption}
      handleRegionChange={handleRegionChange}
      regionOptions={regionOptions}
      handleReset={handleReset}
      isLoading={isLoading}
      isSuccess={isSuccess}
      filteredCountries={filteredCountries}
      handleClickCountry={handleClickCountry}
    />
  );
}
