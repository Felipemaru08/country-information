import PropTypes from 'prop-types';

import { ContentLayout, LoadingCircle } from '@/components';
import { CountryCard } from './CountryCard';
import { FiltersCountries } from './FiltersCountries';
const ViewDashboard = ({
  searchQuery,
  handleSearchChange,
  selectedOption,
  handleRegionChange,
  regionOptions,
  handleReset,
  isLoading,
  isSuccess,
  filteredCountries,
  handleClickCountry,
}) => {
  return (
    <ContentLayout>
      {isLoading && (
        <div className='flex justify-center items-center h-screen'>
          <LoadingCircle />
        </div>
      )}

      {isSuccess && (
        <>
          <FiltersCountries
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
            selectedOption={selectedOption}
            handleRegionChange={handleRegionChange}
            regionOptions={regionOptions}
            handleReset={handleReset}
          />

          <section className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {filteredCountries.map((country, index) => (
              <CountryCard
                key={index}
                country={country}
                click={() => handleClickCountry(country)}
              />
            ))}
          </section>
        </>
      )}
    </ContentLayout>
  );
};

ViewDashboard.propTypes = {
  searchQuery: PropTypes.string,
  handleSearchChange: PropTypes.func,
  selectedOption: PropTypes.object,
  handleRegionChange: PropTypes.func,
  regionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  handleReset: PropTypes.func,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  filteredCountries: PropTypes.array,
  handleClickCountry: PropTypes.func,
};

export { ViewDashboard };
