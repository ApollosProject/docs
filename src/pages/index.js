import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  Broadcast,
  ChalkboardTeacher,
  Code,
  GitBranch,
  GlobeHemisphereWest,
  Heart,
  RocketLaunch,
  TrendUp,
  Users,
  UserSquare,
  YoutubeLogo,
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
      <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <div className='relative bg-gray-800 rounded-lg'>
          <div className='bg-indigo-600 md:absolute md:right-0 md:h-full md:w-1/2'>
            <StaticImage
              className='w-full h-full object-cover'
              src='../images/engagement.png'
              alt='Person on phone using the Apollos app'
            />
          </div>
          <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
            <div className='md:mr-auto md:w-1/2 md:pr-10'>
              <h2 className='text-base text-base-secondary font-semibold tracking-wide uppercase'>
                Experience
              </h2>
              <p className='mt-2 max-w-3xl text-3xl sm:text-5xl leading-8 font-extrabold tracking-tight text-white'>
                Everything you need to grow your digital ministry
              </p>
              <p className='mt-4 max-w-4xl text-lg text-gray-500 lg:mx-auto'>
                When your goal is engagement it can be hard to measure how
                people are actually changing. We focus on building technologies
                that make growing with your faith, family and friends a daily
                habit.
              </p>
              <div className='mt-8'>
                <div className='inline-flex rounded-md shadow'>
                  <a
                    href='#'
                    className='w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow-sm rounded-md inline-flex items-center justify-center gap-3 hover:bg-base-secondary hover:text-white'
                  >
                    <Broadcast aria-hidden='true' className='h-5 w-5' />
                    See Apollos in Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center py-16 lg:py-24 flex flex-col items-center'>
          <h2 className='text-base text-base-secondary font-semibold tracking-wide uppercase'>
            Growth plan
          </h2>
          <p className='mt-2 max-w-3xl text-3xl sm:text-5xl leading-8 font-extrabold tracking-tight text-gray-900'>
            Everything you need to grow your digital ministry
          </p>
          <p className='mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto'>
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className='lg:columns-2 lg:gap-8'>
          <div className='py-4 max-w-lg'>
            <div className={'bg-light-secondary rounded-2xl'}>
              <div className={'pt-6 px-6 lg:pt-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-bluegreen text-base-secondary mb-5'
                  }
                >
                  <GlobeHemisphereWest className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-secondary uppercase`}>
                  Mobile, TV & Web
                </p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Connect on every device
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
              <div className='flex pt-4 justify-center'>
                <StaticImage
                  className='w-full h-full object-cover'
                  src='../images/image-1.png'
                  alt='Pipeline Screenshot'
                />
              </div>
            </div>
          </div>
          <div className='py-4 max-w-lg'>
            <div className={'bg-light-lavender rounded-2xl'}>
              <div className={'pt-6 px-6 lg:pt-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-lavender text-base-lavender mb-5'
                  }
                >
                  <Users className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-lavender uppercase`}>
                  Sub-head
                </p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Host healthy groups
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
              <div className='flex pt-4 justify-center'>
                <StaticImage
                  className='object-cover'
                  src='../images/image-2.png'
                  alt='Pipeline Screenshot'
                />
              </div>
            </div>
          </div>
          <div className='py-4 max-w-lg lg:break-after-column'>
            <div className={'bg-light-mint rounded-2xl'}>
              <div className={'pt-6 px-6 lg:pt-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-mint text-base-mint mb-5'
                  }
                >
                  <Heart className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-mint uppercase`}>Sub-head</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Increase generosity
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
              <div className='flex pt-4 justify-center'>
                <StaticImage
                  className='object-cover'
                  src='../images/image-3.png'
                  alt='Pipeline Screenshot'
                />
              </div>
            </div>
          </div>
          <div className='py-4 max-w-lg'>
            <div className={'bg-light-tan rounded-2xl'}>
              <div className='flex pt-4 justify-center'>
                <StaticImage
                  className='object-cover'
                  src='../images/image-4.png'
                  alt='Pipeline Screenshot'
                />
              </div>
              <div className={'pb-6 px-6 lg:pb-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-tan text-base-tan mb-5'
                  }
                >
                  <UserSquare className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-tan uppercase`}>Sub-head</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Disciple personally
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 max-w-lg'>
            <div className={'bg-light-blue rounded-2xl'}>
              <div className='flex pt-4 justify-center'>
                <StaticImage
                  className='object-cover'
                  src='../images/image-5.png'
                  alt='Pipeline Screenshot'
                />
              </div>
              <div className={'pb-6 px-6 lg:pb-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-blue text-base-blue mb-5'
                  }
                >
                  <TrendUp className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-blue uppercase`}>Sub-head</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Build daily habits
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 max-w-lg'>
            <div className={'bg-light-red rounded-2xl'}>
              <div className='flex pt-8 justify-center'>
                <StaticImage
                  className='object-cover'
                  src='../images/image-6.png'
                  alt='Pipeline Screenshot'
                />
              </div>
              <div className={'pb-6 px-6 lg:pb-8 lg:px-8'}>
                <div
                  className={
                    'flex items-center justify-center h-12 w-12 rounded-full bg-icon-red text-base-red mb-5'
                  }
                >
                  <YoutubeLogo className='h-6 w-6' aria-hidden='true' />
                </div>
                <p className={`text-base text-base-red uppercase`}>Sub-head</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold pb-5 pt-2'>
                  Watch & grow
                </h1>
                <div className='text-gray-500 text-xl'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-2xl mx-auto px-4'>
        <Divider />
      </div>
      <div className='pipeline-wrapper'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24 space-y-8 lg:space-y-24'>
          <div className='pipeline-green-background rounded-lg shadow-xl overflow-hidden'>
            <div className='px-6 py-10 sm:px-16 sm:py-16 xl:px-20 xl:py-20'>
              <p className='text-sm text-base-secondary uppercase'>
                a Church-centric data pipeline
              </p>
              <h1 className='py-4 text-3xl lg:text-5xl tracking-tight font-extrabold text-white'>
                Syncs with your existing services and data.
              </h1>
              <p className='text-lg leading-6 text-dark-secondary/60'>
                Apollos syncs data with the other services you already depend
                on. Phasellus lorem quam molestie id quisque diam aenean nulla
                in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
              <div className='flex flex-col items-center'>
                <div className='mb-8 mt-14 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
                  <StaticImage
                    className='transform rounded-md object-cover object-left-top'
                    src='../images/pipeline.png'
                    alt='Pipeline Screenshot'
                  />
                </div>
                <a
                  href='#'
                  className='w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow-sm rounded-md inline-flex items-center justify-center gap-3 hover:bg-base-secondary hover:text-white'
                >
                  <RocketLaunch aria-hidden='true' className='h-5 w-5' />
                  Explore integrations
                </a>
              </div>
            </div>
          </div>
          <div className='space-y-12'>
            <div>
              <p className='text-base text-base-secondary uppercase'>
                Our Blueprint
              </p>
              <h1 className='text-5xl font-extrabold text-black'>
                For <span className='italic'>the</span>
              </h1>
              <h1 className='text-5xl font-extrabold text-black'>Kingdom.</h1>
            </div>
            <div>
              <dl className='lg:grid lg:grid-cols-3 lg:gap-8'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className='flex items-center justify-center h-12 w-12 rounded-full bg-icon-bluegreen text-base-secondary shadow-sm'>
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
        <div className='max-w-7xl mx-auto px-4 py-16 lg:py-20 flex flex-col items-center space-y-6'>
          <h1 className='text-4xl font-extrabold text-white'>Lorem ipsum</h1>
          <p className='text-center leading-6 text-dark-secondary/60'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href='#'
            className='w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow rounded-md inline-flex items-center justify-center hover:bg-base-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-secondary'
          >
            Get started
          </a>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
