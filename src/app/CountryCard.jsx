import { formatNumberWithDots } from '@/utils';
import Image from 'next/image';

const CountryInfoSectionCard = ({ title = '', content = '' }) => {
  return (
    <div className='flex'>
      <h3 className='text-xs font-semibold'>{title}</h3>
      <p className='ml-2 text-xs text-gray-400'>{content}</p>
    </div>
  );
};

const CountryCard = (props) => {
  const { country, click } = props;
  return (
    <div
      onClick={click}
      className='max-w-sm bg-white border border-gray-200 rounded-lg shadow transform hover:scale-95 motion-reduce:transform-none duration-300 transition ease-in-out cursor-pointer'
    >
      <Image
        className='rounded-t-lg w-full h-40 object-cover'
        src={country.flags.svg}
        alt={country.flags.alt}
        width={500}
        height={500}
      />
      <section className='p-5'>
        <h2 className='font-semibold text-sm mb-5'>{country.name.common}</h2>
        <div className='space-y-2'>
          <CountryInfoSectionCard
            title='Pupulation:'
            content={formatNumberWithDots(country.population)}
          />
          <CountryInfoSectionCard
            title='Region:'
            content={country.continents}
          />
          <CountryInfoSectionCard title='Capital:' content={country.capital} />
        </div>
      </section>
    </div>
  );
};

export { CountryCard };
