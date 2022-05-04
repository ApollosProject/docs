import * as React from "react";
import {
  Broadcast,
  ChalkboardTeacher,
  Code,
  GitBranch,
  GlobeHemisphereWest,
  Heart,
  Lightning,
  RocketLaunch,
  TrendUp,
  Users,
  UserSquare,
  YoutubeLogo,
} from "phosphor-react";
import { StaticImage } from "gatsby-plugin-image";
import Divider from "../components/Divider";
import Logo from "../images/svgs/logo.svg";

import Header from "../components/Header";

const IndexPage = () => {
  const features = [
    {
      name: "Open source & open license",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GitBranch,
    },
    {
      name: "Developer-supported community",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: Code,
    },
    {
      name: "Lead with collaboration and strategy",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ChalkboardTeacher,
    },
  ];

  return (
    <>
      <div className="relative">
        <Header />
        <div className="page-background">
          <div className="pt-10 px-6 lg:px-16 centered-gradient text-white">
            <div className="pb-64 orb-bottom container mx-auto">
              <div className="max-w-xl mx-auto my-12 lg:mt-16">
                <div className="text-center flex flex-col items-center">
                  <Logo />
                  <div className="pb-10 pt-8">
                    <p className="text-white font-semibold uppercase text-sm">
                      We’ll help your community
                    </p>
                    <h1 className="font-serif pb-8 pt-4 font-extrabold text-6xl">
                      Be the Church,{" "}
                      <span className="text-base-tertiary">everyday</span>.
                    </h1>
                    <p className="max-w-sm mx-auto text-xl text-dark-secondary">
                      <span className="opacity-60">
                        With <span className="italic">daily</span>
                      </span>{" "}
                      Personalized Discipleship
                      <span className="opacity-60"> and</span> Spiritual
                      Fitness,{" "}
                      <span className="opacity-60">
                        the Apollos Platform helps your church thrive.
                      </span>
                    </p>
                  </div>
                  <p className="text-white font-semibold uppercase text-sm pb-2">
                    Used By
                  </p>
                </div>
                <div className="flex gap-x-8 gap-y-4 px-12 flex-wrap justify-center">
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      width={100}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/ns.png"
                      alt="NewSpring"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      width={100}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/willow.png"
                      alt="Willow Creek"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/cf.png"
                      alt="Christ Fellowship"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/lcbc.png"
                      alt="LCBC"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/bayside.png"
                      alt="Bayside"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      width={120}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/chase-oaks.png"
                      alt="Chase Oaks"
                    />
                  </div>
                  <div>
                    <StaticImage
                      layout="constrained"
                      height={24}
                      width={120}
                      placeholder={false}
                      loading="eager"
                      transformOptions={{ fit: "contain" }}
                      backgroundColor={"transparent"}
                      src="../images/logos/rv.png"
                      alt="River Valley"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-h-screen mx-auto container">
            <StaticImage
              src="../images/phone.png"
              alt="phone"
              placeholder="blurred"
              // objectFit="contain"
              className="mx-auto max-w-full min-h-[800px] aspect-[1225/1351] -mt-60"
            />
          </div>
          <div className="max-w-6xl mx-auto px-9 py-16 relative -mt-[25vh]">
            <p className="text-sm text-base-secondary font-semibold uppercase">
              Digital Growth Platform
            </p>
            <h3 className="font-serif max-w-xl pt-4 text-4xl md:text-5xl font-bold md:leading-[3.75rem] tracking-tight text-primary">
              Shepherd your community{" "}
              <span className="italic">all week long</span>.
            </h3>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <p className="mt-4 text-lg text-gray-700/60 lg:mx-auto leading-6">
                <span className="font-medium text-gray-700">
                  Disciple making is tough when
                </span>{" "}
                people are isolated and not genuinely connecting. Online
                communities are disconnected, your followers lack clear steps,
                and you don’t have the data to make confident strategic
                decisions.
              </p>
              <p className="mt-4 text-lg text-gray-700/60 lg:mx-auto leading-6">
                <span className="font-medium text-gray-700">
                  But when you partner with Apollos,
                </span>{" "}
                everyone in your following will have clear next steps, they’ll
                experience easy ways to connect with others, and they’ll finally
                make it a habit to engage in scripture and prayer daily.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white green-button shadow-lg rounded-md inline-flex items-center justify-center gap-2 hover:bg-white hover:text-base-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-secondary hover:bg-base-secondary hover:text-white"
              >
                <Lightning aria-hidden="true" className="h-5 w-5" />
                Book a Demo
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-2 lg:columns-3 gap-2 md:gap-8">
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/kaleb2.png"
                alt="Kaleb"
              />
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/jeff2.png"
                alt="Jeff"
              />
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/brad2.png"
                alt="Brad"
              />
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/lisa2.png"
                alt="Lisa"
              />
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/monsters2.png"
                alt="Monsters"
              />
              <StaticImage
                className="rounded-2xl w-full h-full object-cover md:m-4 mb-2 shadow-lg md:shadow-xl"
                src="../images/paul2.png"
                alt="Paul"
              />
            </div>
          </div>
          <section className="pb-24 pt-16">
            <div className="relative max-w-7xl mx-auto px-12">
              <svg
                className="absolute top-full right-full transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/4"
                width={404}
                height={404}
                fill="none"
                viewBox="0 0 404 404"
                role="img"
                aria-labelledby="svg-workcation"
              >
                <title id="svg-workcation">Workcation</title>
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={404}
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                />
              </svg>

              <div className="relative">
                <img
                  className="mx-auto h-8 text-base-primary"
                  fill="currentColor"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                  alt="Workcation"
                />
                <blockquote className="mt-10">
                  <div className="max-w-3xl mx-auto text-center text-lg lg:text-2xl lg:leading-9 font-medium text-gray-900">
                    <p>
                      &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Nemo expedita voluptas culpa sapiente alias
                      molestiae. Numquam corrupti in laborum sed rerum et
                      corporis.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        <img
                          className="mx-auto h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-medium text-gray-900">
                          Judith Black
                        </div>

                        <svg
                          className="hidden md:block mx-1 h-5 w-5 text-base-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M11 0h3L9 20H6l5-20z" />
                        </svg>

                        <div className="text-base font-medium text-gray-500">
                          CEO, Workcation
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative engagement rounded-lg overflow-hidden space-4 shadow-xl">
              <div className="px-4 py-12 sm:px-6 lg:px-16 lg:py-16">
                <div className="md:mr-auto md:w-1/2 md:pr-10">
                  <p className="text-sm text-base-secondary font-semibold uppercase">
                    Experience
                  </p>
                  <h2 className="font-serif pt-4 text-5xl font-bold leading-12 tracking-tight text-white line-through">
                    Engagement
                  </h2>
                  <h2 className="font-serif text-5xl font-bold leading-12 tracking-tight text-white italic">
                    Connection.
                  </h2>
                  <p className="mt-4 max-w-4xl text-lg text-dark-secondary/60 lg:mx-auto">
                    We create better engagement by creating technology-driven
                    experiences that make{" "}
                    <span class="text-white">connecting</span> with God and
                    community <span class="text-white">a daily habit.</span>
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="rounded-md shadow w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow-sm rounded-md inline-flex items-center justify-center gap-3 hover:bg-base-secondary hover:text-white"
                    >
                      <Broadcast aria-hidden="true" className="h-5 w-5" />
                      See Apollos in Action
                    </a>
                  </div>
                </div>
              </div>
              <div className="opacity-90 md:absolute md:right-0 md:top-0 md:h-full md:w-1/2 rounded-b-lg md:rounded-r-lg overflow-hidden">
                <StaticImage
                  className="w-full h-full object-cover"
                  objectFit="cover"
                  src="../images/engagement.png"
                  alt="Person on phone using the Apollos app"
                />
              </div>
            </div>
          </div>
          <div className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center py-16 lg:py-24 flex flex-col items-center">
              <p className="text-base text-base-secondary font-semibold uppercase">
                Growth Plan
              </p>
              <p className="mt-2 max-w-3xl text-3xl sm:text-5xl leading-8 font-bold font-serif tracking-tight text-gray-900">
                Everything you need to grow your digital ministry
              </p>
              <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
            </div>
            <div className="lg:columns-2 lg:gap-8">
              <div className="py-4 max-w-lg">
                <div className={"bg-light-secondary rounded-2xl"}>
                  <div className={"pt-6 px-6 lg:pt-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-bluegreen text-base-secondary mb-5"
                      }
                    >
                      <GlobeHemisphereWest
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className={`text-base text-base-secondary font-semibold uppercase`}
                    >
                      Mobile, TV & Web
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Connect on every device
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                  <div className="flex pt-4 justify-center">
                    <StaticImage
                      className="w-full h-full object-cover"
                      src="../images/image-1.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 max-w-lg">
                <div className={"bg-light-lavender rounded-2xl"}>
                  <div className={"pt-6 px-6 lg:pt-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-lavender text-base-lavender mb-5"
                      }
                    >
                      <Users className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-base text-base-lavender font-semibold uppercase`}
                    >
                      Sub-head
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Host healthy groups
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                  <div className="flex pt-4 justify-center">
                    <StaticImage
                      className="object-cover"
                      src="../images/image-2.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 max-w-lg lg:break-after-column">
                <div className={"bg-light-mint rounded-2xl"}>
                  <div className={"pt-6 px-6 lg:pt-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-mint text-base-mint mb-5"
                      }
                    >
                      <Heart className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-base text-base-mint font-semibold uppercase`}
                    >
                      Sub-head
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Increase generosity
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                  <div className="flex pt-4 justify-center">
                    <StaticImage
                      className="object-cover"
                      src="../images/image-3.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 max-w-lg">
                <div className={"bg-light-tan rounded-2xl"}>
                  <div className="flex pt-4 justify-center">
                    <StaticImage
                      className="object-cover"
                      src="../images/image-4.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                  <div className={"pb-6 px-6 lg:pb-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-tan text-base-tan mb-5"
                      }
                    >
                      <UserSquare className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-base text-base-tan font-semibold uppercase`}
                    >
                      Sub-head
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Disciple personally
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 max-w-lg">
                <div className={"bg-light-blue rounded-2xl"}>
                  <div className="flex pt-4 justify-center">
                    <StaticImage
                      className="object-cover"
                      src="../images/image-5.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                  <div className={"pb-6 px-6 lg:pb-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-blue text-base-blue mb-5"
                      }
                    >
                      <TrendUp className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-base text-base-blue font-semibold uppercase`}
                    >
                      Sub-head
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Build daily habits
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 max-w-lg">
                <div className={"bg-light-red rounded-2xl"}>
                  <div className="flex pt-8 justify-center">
                    <StaticImage
                      className="object-cover"
                      src="../images/image-6.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                  <div className={"pb-6 px-6 lg:pb-8 lg:px-8"}>
                    <div
                      className={
                        "flex items-center justify-center h-12 w-12 rounded-full bg-icon-red text-base-red mb-5"
                      }
                    >
                      <YoutubeLogo className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className={`text-base text-base-red font-semibold uppercase`}
                    >
                      Sub-head
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-serif pb-5 pt-2">
                      Watch &amp; grow
                    </h3>
                    <div className="text-gray-500 text-xl">
                      Phasellus lorem quam molestie id quisque diam aenean nulla
                      in. Accumsan in quis quis nunc, ullamcorper malesuada.
                      Eleifend condimentum id viverra nulla.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto px-4">
            <Divider />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-24 space-y-8 lg:space-y-24">
            <div className="pipeline-green-background rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-10 sm:px-16 sm:py-16 xl:px-20 xl:py-20">
                <p className="text-sm text-base-secondary font-semibold uppercase">
                  a Church-centric data pipeline
                </p>
                <h2 className="py-4 text-3xl lg:text-5xl tracking-tight font-bold font-serif text-white">
                  Syncs with your existing services and data.
                </h2>
                <p className="text-lg leading-6 text-dark-secondary/60">
                  Apollos syncs data with the other services you already depend
                  on. Phasellus lorem quam molestie id quisque diam aenean nulla
                  in. Accumsan in quis quis nunc, ullamcorper malesuada.
                  Eleifend condimentum id viverra nulla.
                </p>
                <div className="flex flex-col items-center">
                  <div className="mb-8 mt-14 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                    <StaticImage
                      className="transform rounded-md object-cover object-left-top"
                      src="../images/pipeline.png"
                      alt="Pipeline Screenshot"
                    />
                  </div>
                  <a
                    href="#"
                    className="w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow-sm rounded-md inline-flex items-center justify-center gap-3 hover:bg-base-secondary hover:text-white"
                  >
                    <RocketLaunch aria-hidden="true" className="h-5 w-5" />
                    Explore integrations
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <p className="text-base text-base-secondary font-semibold uppercase"></p>
                <h3 className="text-5xl font-bold font-serif text-black">
                  For <span className="italic">the</span>
                  <br />
                  Kingdom.
                </h3>
              </div>
              <div>
                <dl className="lg:grid lg:grid-cols-3 lg:gap-8">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-icon-bluegreen text-base-secondary shadow-sm">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 flex flex-col items-center space-y-6">
            <h2 className="text-4xl font-extrabold font-serif text-white">
              Lorem ipsum
            </h2>
            <p className="text-center leading-6 text-dark-secondary/60">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <a
              href="#"
              className="w-full sm:w-auto px-6 py-3 text-base font-medium text-base-secondary bg-white shadow rounded-md inline-flex items-center justify-center hover:bg-base-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-secondary"
            >
              Get started
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
