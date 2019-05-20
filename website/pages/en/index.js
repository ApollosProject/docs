/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Icons = require(`${process.cwd()}/core/Icons.js`);

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = require(`${process.cwd()}/core/GridBlock.js`);

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

const Splash = () => (
  <Container className="waveOne">
    <div className="splash blockElement imageAlignSide imageAlignRight twoByGridBlock">
      <div className="blockContent">
        <h1 class="logoReplace">The Apollos Project</h1>
        <div>
          <h4>
            Join a community of churches working together to bring people closer
            to God and advance the Kingdom through technology.
          </h4>
        </div>
      </div>
      <div className="blockImage">
        <img
          class="homeArt"
          src={imgUrl('brand/art.png')}
          alt="The Apollos Project"
        />
      </div>
    </div>
  </Container>
);

//    🤠
const SubSplash = () => (
  <Container className="waveTwo">
    <h1>Build by the Church, for the Church</h1>
    <h4>
      The Apollos Project is an open-source platform that empowers your church
      to launch your own mobile app and bring your congregation closer to Jesus.
    </h4>
  </Container>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <Splash />
        <SubSplash />
      </div>
    );
  }
}

module.exports = Index;
