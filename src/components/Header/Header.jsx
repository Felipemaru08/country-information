import { ContentLayout } from '../ContentLayout';

const Header = () => {
  return (
    <header className='sticky z-50 top-0 w-full bg-white shadow-md'>
      <ContentLayout>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-lg'>Where in the world?</h1>
          <h1 className='text-sm my-auto'>Dark Mode</h1>
        </div>
      </ContentLayout>
    </header>
  );
};

export { Header };
