import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ChalkboardTeacher, Code, GitBranch } from 'phosphor-react';

const IndexPage = () => {
  const features = [
    {
      name: 'Open source & open license',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GitBranch,
    },
    {
      name: 'Developer-supported community',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: Code,
    },
    {
      name: 'Lead with collaboration and strategy',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChalkboardTeacher,
    },
  ];

  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Helmet>
      <div className='pipeline-wrapper'>
        <div className='pipeline'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='mt-6 max-w-3xl text-base brand-text uppercase'>
              Our Blueprint
            </p>
            <h1 className='text-5xl font-extrabold tracking-tight text-black'>
              For <i>the</i>
            </h1>
            <h1 className='text-5xl font-extrabold tracking-tight text-black'>
              Kingdom.
            </h1>
          </div>
          <div className='py-12'>
            <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
              <h2 className='sr-only'>For the Kingdom</h2>
              <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className='flex items-center justify-center h-12 w-12 rounded-full blueprint-icon-bg brand-text'>
                        <feature.icon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <p className='mt-5 text-lg leading-6 font-medium text-gray-900'>
                        {feature.name}
                      </p>
                    </dt>
                    <dd className='mt-2 text-base text-gray-500'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
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
