import React from "react";
import ApollosLight from "../images/svgs/logos/apollos-light.svg";
import ApollosDark from "../images/svgs/logos/apollos-dark.svg";
import { Link } from "gatsby";

const Header = () => (
  <div className="absolute top-0 left-0 right-0">
    <div className="container px-4 mx-auto">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <ApollosDark />
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden md:flex w-full sm:w-auto px-6 py-3 text-base font-medium text-white get-started-button shadow-lg rounded-md inline-flex items-center justify-center gap-2 hover:bg-white hover:text-base-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-secondary hover:bg-base-secondary hover:text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
