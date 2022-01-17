import * as React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Helmet>
      {/* <footer className='footer'>
        <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
          <div className='mt-8 flex items-center flex-col space-y-4'>
            <h1 className='text-4xl'>Lorem ipsum</h1>
            <p>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <button
              type='button'
              className='footer-button inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Button text
            </button>
          </div>
        </div>
      </footer> */}
      <footer className='footer'>
        <div className=''>
          <div className='flex items-center flex-col px-4 py-16 lg:py-20 space-y-6 max-w-7xl mx-auto'>
            <h1 className='text-4xl leading-9 font-extrabold text-white'>
              Lorem ipsum
            </h1>
            <p className='text-center leading-6'>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <button
              type='button'
              className='footer-button inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto'
            >
              Button text
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
