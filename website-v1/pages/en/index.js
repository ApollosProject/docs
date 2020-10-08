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
const Card = require(`${process.cwd()}/core/Card.js`);

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
      The Apollos Project is an open-source initiative that empowers your church
      to <strong>launch your own digital products</strong> and{' '}
      <strong>bring your congregation closer to Jesus.</strong>
    </h4>
    <h4>
      We're currently focused on building a mobile application platform with a
      graph-based data layer that{' '}
      <strong>integrates directly with your ChMS</strong> and other services you
      already use.
    </h4>
    <Container className="spacingL">
      <GridBlock
        align="left"
        layout="threeColumn"
        className="spacingS gridBlockSkinny"
        contents={[
          {
            title: <h3>Leverage your data</h3>,
            content: <p>Personalize the experience</p>,
            image: <Icons.Stack />,
            imageAlign: 'top',
          },
          {
            title: <h3>Platform integrations</h3>,
            content: <p>Connect to your existing services</p>,
            image: <Icons.Layout />,
            imageAlign: 'top',
          },
          {
            title: <h3>Customize your app</h3>,
            content: <p>Use React Native to make it your own</p>,
            image: <Icons.Stack />,
            imageAlign: 'top',
          },
        ]}
      />
    </Container>
  </Container>
);

const Features = () => (
  <Container className="waveThree">
    <GridBlock
      align="left"
      layout="oneColumn"
      className="feature"
      contents={[
        {
          content: (
            <Card>
              <h1>Enhance the weekend experience</h1>
              <p className="spacingM">
                Everything your congregation needs is at their fingertips
                whether they are on campus or online. Now people can interact
                with the sermon, check in kids, tithe, and view announcements
                all from your church’s app.
              </p>
            </Card>
          ),
          image: imgUrl('mockup-weekend.png'),
        },
        {
          content: (
            <Card>
              <h1>Engage your congregation all week</h1>
              <p className="spacingM">
                Your congregation can reflect on the message, read daily
                devotionals, or stay up to date with what’s happening in your
                community no matter where they are.
              </p>
            </Card>
          ),
          image: imgUrl('mockup-week.png'),
          imageAlign: 'right',
        },
        {
          content: (
            <Card>
              <h1>Help members take the next step</h1>
              <p className="spacingM">
                Deliver the right next step, for the right person, at the right
                time. Users can even view personalized content to cultivate a
                deeper relationship with Jesus.
              </p>
            </Card>
          ),
          image: imgUrl('mockup-feed.png'),
        },
      ]}
    />
  </Container>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Our Community</h2>
      <p>
        We believe churches everywhere should be able to create a personalized
        experience for their community. Join our growing community!
      </p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More Apollos Organizations
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <Splash />
        <SubSplash />
        <Features />
        <Showcase />
      </div>
    );
  }
}

module.exports = Index;
