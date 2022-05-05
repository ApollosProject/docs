import React from "react";
import "./src/css/index.css";
import { Helmet } from "react-helmet";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Helmet>
      {element}
    </>
  );
};
