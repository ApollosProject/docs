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
    <GridBlock
      className="splash"
      contents={[
        {
          title: <h1 className="logoReplace">The Apollos Project</h1>,
          content: (
            <h4>
              Join a community of churches working together to bring people
              closer to God and advance the Kingdom through technology.
            </h4>
          ),
          image: imgUrl('brand/art.png'),
          imageAlign: 'right',
        },
      ]}
    />
  </Container>
);

//    🤠
const SubSplash = () => (
  <Container className="waveTwo">
    <h1>Built by the Church, for the Church</h1>
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
