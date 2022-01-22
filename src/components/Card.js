import * as React from 'react';

const Card = ({ data }) => {
  return (
    <div className={`${data.backgroundColor} p-6 lg:p-8 rounded-2xl`}>
      <div className='flex items-center justify-center h-12 w-12 rounded-full blueprint-icon-bg text-base-secondary mb-5'>
        <data.icon className='h-6 w-6' aria-hidden='true' />
      </div>
      <p className='text-base text-base-secondary uppercase'>
        {data.subHeading}
      </p>
      <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
        {data.heading}
      </h1>
      <div className='text-gray-500'>{data.text}</div>
    </div>
  );
};

export default Card;
