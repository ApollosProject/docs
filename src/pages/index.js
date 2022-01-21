import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  ChalkboardTeacher,
  Code,
  GitBranch,
  RocketLaunch,
} from 'phosphor-react';
import { StaticImage } from 'gatsby-plugin-image';
import Divider from '../components/Divider';

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
      <div className='py-8 lg:py-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        Heading
        <div className='lg:columns-2'>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
          <div>Card 4</div>
          <div>Card 5</div>
          <div>Card 6</div>
        </div>
      </div>
      <div className='max-w-2xl mx-auto px-4'>
        <Divider />
      </div>
      <div className='pipeline-wrapper'>
        <div className='py-8 lg:py-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='pipeline-green-background rounded-lg shadow-xl overflow-hidden'>
            <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
              <div className='lg:self-center'>
                <p className='max-w-3xl text-sm text-base-secondary uppercase'>
                  a Church-centric data pipeline
                </p>
                <h2 className='text-3xl font-extrabold text-white py-4'>
                  <span className='block'>
                    Syncs with your existing services and data.
                  </span>
                </h2>
                <p className='mt-4 text-lg leading-6 text-dark-secondary'>
                  Apollos syncs data with the other services you already depend
                  on. Phasellus lorem quam molestie id quisque diam aenean nulla
                  in. Accumsan in quis quis nunc, ullamcorper malesuada.
                  Eleifend condimentum id viverra nulla.
                </p>
                <div className='flex flex-col items-center'>
                  <div className='mt-14 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
                    <StaticImage
                      className='transform rounded-md object-cover object-left-top'
                      src='../images/pipeline.png'
                      alt='Pipeline Screenshot'
                    />
                  </div>
                  <a
                    href='#'
                    className='mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex gap-2 items-center text-base font-medium text-base-secondary hover:text-base-secondary-hover'
                  >
                    <RocketLaunch />
                    Explore integrations
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-8 lg:pt-24'>
            <p className='max-w-3xl text-base text-base-secondary uppercase'>
              Our Blueprint
            </p>
            <h1 className='text-5xl font-extrabold tracking-tight text-black'>
              For <i>the</i>
            </h1>
            <h1 className='text-5xl font-extrabold tracking-tight text-black'>
              Kingdom.
            </h1>
            <div className='pt-12'>
              <h2 className='sr-only'>For the Kingdom</h2>
              <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className='flex items-center justify-center h-12 w-12 rounded-full blueprint-icon-bg text-base-secondary'>
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
              className='text-base-secondary inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto'
            >
              Get started
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
