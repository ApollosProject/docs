/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
}

const Splash = () => (
  <Container>
    <div className="blockElement imageAlignSide imageAlignRight twoByGridBlock">
      <div className="blockContent">
        <h2>The Apollos Project</h2>
        <div>
          <p>
            Join a community of churches working together to bring people closer to God and advance the Kingdom through technology.
          </p>
        </div>
      </div>
      <div className="blockImage">
        <img class="homeArt" src={imgUrl("brand/art.png")} alt="The Apollos Project" />
      </div>
    </div>
  </Container>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <Splash />
      </div>
    );
  }
}

module.exports = Index;
