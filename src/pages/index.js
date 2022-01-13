import * as React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Helmet>
      <footer className='footer'>
        <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
          <div className='mt-8 flex justify-center space-x-6'>
            <h1>Lorem ipsum</h1>
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
      </footer>
    </>
  );
};

export default IndexPage;
