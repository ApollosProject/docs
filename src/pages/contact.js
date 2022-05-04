import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Logo from "../images/svgs/logo.svg";
import ApollosLight from "../images/svgs/logos/apollos-light.svg";
import ApollosDark from "../images/svgs/logos/apollos-dark.svg";

const ContactPage = ({ data }) => {
  return (
    <div className="relative">
      <Header />
      <div className="page-background">
        <div className="pt-60 pb-40 left-anchored-gradient text-white">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
              <div>
                <h1 className="font-serif pb-8 pt-4 font-extrabold text-6xl">
                  See what <i className="italic text-base-tertiary">Apollos</i>{" "}
                  can do for you
                </h1>
                <p className="opacity-60 lg:pr-32">
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </p>
              </div>

              <form
                netlify
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
                className="lg:grid-cols-1 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-500"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="text-gray-800 py-3 px-4 block w-full shadow-sm focus:ring-base-secondary focus:border-base-secondary border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="text-gray-800 py-3 px-4 block w-full shadow-sm focus:ring-base-secondary focus:border-base-secondary border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Church / Organization
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="text-gray-800 py-3 px-4 block w-full shadow-sm focus:ring-base-secondary focus:border-base-secondary border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="text-gray-800 py-3 px-4 block w-full shadow-sm focus:ring-base-secondary focus:border-base-secondary border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="text-gray-800 h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-base-secondary focus:border-base-secondary rounded-md"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="text-gray-800 py-3 px-4 block w-full pl-20 focus:ring-base-secondary focus:border-base-secondary border-gray-300 rounded-md"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-base-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-secondary"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="py-16 container max-w-5xl mx-auto">
          <div className="text-center flex flex-col items-center">
            <p className="text-base text-base-secondary font-semibold uppercase">
              The Community
            </p>
            <p className="mt-2 max-w-3xl text-3xl sm:text-5xl leading-8 font-bold font-serif tracking-tight text-gray-900">
              You're in good company
            </p>
          </div>

          <ul
            role="list"
            className="py-16 grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4"
          >
            {data?.logos?.edges.map(({ node }) => (
              <li key={node.title} className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-7 p-12 overflow-hidden">
                  <GatsbyImage
                    image={getImage(node)}
                    alt={node.title}
                    objectFit="contain"
                    className="object-cover pointer-events-none mix-blend-darken"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    logos: allFile(filter: { relativeDirectory: { eq: "contact-logos" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  }
`;
