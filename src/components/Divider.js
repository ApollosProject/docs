import * as React from 'react';

const Divider = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-[#f8f8fb] px-2 text-gray-500'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 24L9.39372 0H14.6063L24 24H0ZM11.8571 5.8363L6.92808 19.4399H17.0847L12.1556 5.8363H11.8571Z'
              fill='#00676D'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Divider;
