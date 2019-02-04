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

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <Logo img_src={imgUrl("apollos.png")} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl("install.html", language)}>Install</Button>
            <Button href={docUrl("contributing.html", language)}>
              Contribute
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content:
          "Apollos allows you to integrate with various content data sources to provide the user a feed to serve as the central hub for everything happening at your church.",
        image: imgUrl("rss.png"),
        imageAlign: "top",
        title: "Custom Content Feed"
      },
      {
        content:
          "Beautiful, native media player to view sermons and videos or listen to music. Comes with AirPlay functionality.",
        image: imgUrl("airplay.png"),
        imageAlign: "top",
        title: "Media Player"
      },
      {
        content:
          "If you would like to tinker with the code or contribute to the project, Apollos is built using React Native, which allows developers to build Android and iOS applications with the same Javascript code base.",
        image: imgUrl("react.png"),
        imageAlign: "top",
        title: "React Native"
      }
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: "center" }}
  >
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content:
          "We have tried to make the documentation as straight forward as possible and our goal is that you would be able to go from nothing to a fully functioning church app with little software experience.",
        image: imgUrl("code.png"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content:
          "If you'd like to give the app a try, you can download it on the [App Store]() or [Google Play Store](). Simply create your own user account and you're off and running. We'd love to [hear from you]() if you have any other questions before getting started!",
        image: imgUrl("demo_small.gif"),
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Mission = () => (
  <Block background="dark">
    {[
      {
        content:
          "The Apollos Project exists to develop a platform that creates a personalized experience that engages a user to develop a deeper realationship with Jesus and the Church.",
        image: imgUrl("apollos_full.png"),
        imageAlign: "right",
        title: "Our Mission"
      }
    ]}
  </Block>
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
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          <Mission />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
