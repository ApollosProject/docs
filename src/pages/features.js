import Layout from '@theme/Layout';
import React from 'react';

export default () => {
  return (
    <Layout>
      <div className="dark">
        <div className="hero-text__features">
          <img
            src="/images/Circle-Outline__Features.svg"
            alt="Dashed line of a circle"
            className="circleoutline"
          />
          <div className="textcontainer__hero-text-features">
            <h1 className="white left-aligned">
              Designed to drive impact for the Church.
            </h1>
            <p className="body1 transparent">
              Apollos is a chuch-led framework that strikes a balance between
              effort and customization so that you can make an impact that is
              tailored to your ministries.
            </p>
          </div>
          <div className="mockupcontainer__features">
            <img
              src="/images/Mockup__Features.png"
              alt="Mockup of an Apollos app"
              srcSet="/images/Mockup__Features-p-500.png 500w, /images/Mockup__Features.png 928w"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 91vw, (max-width: 1279px) 928px, 942.125px"
              className="mockup"
            />
            <img
              src="/images/Circles__Features.svg"
              alt="Faded circles overlapping each other"
              className="circles__features"
            />
          </div>
        </div>
        <div className="tech__features">
          <div className="imagescontainer__tech">
            <img
              src="/images/Blocks__Features.svg"
              alt="Building blocks"
              data-w-id="de59d361-0b47-8a71-82b0-e533f4991680"
              className="blocks"
            />
            <img
              src="/images/SemiCircle__Features.svg"
              alt="Green semicircle"
              className="semicircle"
            />
          </div>
          <div
            data-w-id="530ad376-3c90-34ea-884a-e647cae095d7"
            className="contentcontainer__tech"
          >
            <h2 className="white left-aligned">
              It’s never been easier to build and own experiences designed for
              your congregation
            </h2>
            <p className="body2 transparent left-aligned">
              Think of Apollos as building blocks your team can use to create
              experiences that{' '}
              <span className="body2 highlighted">
                bring people closer to Jesus
              </span>{' '}
              and better connect them with your church. Our robust component
              library allows you to take ownership of what you create.
            </p>
            <p className="body2 transparent left-aligned">
              We made sure to build our framework in languages that your team
              will understand and that are already trusted by the top product
              teams in the world.
            </p>
            <div className="techstackcontainer">
              <img
                src="/images/TechLogo__React-Native.svg"
                alt="React Native Logo"
                data-w-id="eb1d6599-614f-eaa8-9173-09997b135fc3"
                className="techlogo"
              />
              <img
                src="/images/TechLogo__Graphql.svg"
                alt="Graphql Logo"
                data-w-id="6556a5e8-18ef-6d32-1435-1009243ebeb5"
                className="techlogo"
              />
              <img
                src="/images/TechLogo__Apollo.svg"
                alt="Apollo Logo"
                data-w-id="ec03ce9f-96a1-0be9-e494-d19ca1258214"
                className="techlogo"
              />
              <img
                src="/images/TechLogo__JS.svg"
                alt="Javascript Logo"
                data-w-id="dd542460-9812-ee02-dacd-afaeca2ddf2f"
                className="techlogo"
              />
            </div>
          </div>
        </div>
        <div className="textsection__features">
          <div className="textcontainer__overview">
            <h1 className="hero-text white">We've done the heavy lifting for you</h1>
            <p className="body1 transparent centered shrunk ugh">
              Apollos is designed so that you can{' '}
              <span className="body1 highlighted">
                build anything on top of it
              </span>
              , but we also provide robust features out of the box to get your
              church{' '}
              <span className="body1 highlighted">up and running quickly</span>.
            </p>
          </div>
        </div>
        <div className="producthighlights__features">
          <div className="producthighlight">
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b27"
              className="textcontainer__producthighlight features"
            >
              <div className="label1 secondary">Content</div>
              <h2 className="white left-aligned">Robust content system</h2>
              <p className="body2 transparent left-aligned">
                Flexible, extensible system for displaying any type of content
                to your users using a rich persona-based personalization system
                that can be used to segment any content.
              </p>
            </div>
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b2e"
              className="mockup__producthighlight"
            >
              <div className="bubble2__producthighlight" />
              <div className="bubble1__casestudy white" />
              <img
                src="/images/Mockup__Features1.png"
                srcSet="/images/Mockup__Features1-p-500.png 500w, /images/Mockup__Features1.png 608w"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 41vw, (max-width: 1279px) 37vw, 29vw"
                alt=""
                className="image__producthighlight"
              />
            </div>
          </div>
          <div className="producthighlight flipped">
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b33"
              className="textcontainer__producthighlight flipped"
            >
              <div className="label1 secondary">video</div>
              <h2 className="white left-aligned">Live Experiences</h2>
              <p className="body2 transparent left-aligned">
                Adaptable live-stream integration for our universal media player
                along with rich in-person and remote viewing engagement
                capabilities
              </p>
            </div>
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b3a"
              className="mockup__producthighlight"
            >
              <img
                src="/images/Mockup__Features2.png"
                alt="Phone mockup of Christ Fellowship's app"
                srcSet="/images/Mockup__Features2-p-500.png 500w, /images/Mockup__Features2.png 608w"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 41vw, (max-width: 1279px) 37vw, 29vw"
                className="image__producthighlight flipped"
              />
              <div className="bubble1__casestudy white flipped" />
              <div className="bubble2__casestudy cf" />
            </div>
          </div>
          <div className="producthighlight">
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b3f"
              className="textcontainer__producthighlight"
            >
              <div className="label1 secondary">data</div>
              <h2 className="white left-aligned">ChMS Integration</h2>
              <p className="body2 transparent left-aligned">
                Apollos apps offer simple login and onboarding while integrating
                all user accounts with your ChMS account system.
              </p>
            </div>
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b46"
              className="mockup__producthighlight"
            >
              <div className="bubble2__casestudy willowcreek" />
              <div className="bubble1__casestudy white" />
              <img
                src="/images/Mockup__Features3.png"
                alt="Mockup of the Apollos login screen"
                srcSet="/images/Mockup__Features3-p-500.png 500w, /images/Mockup__Features3.png 608w"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 41vw, (max-width: 1279px) 37vw, 29vw"
                className="image__producthighlight"
              />
            </div>
          </div>
          <div className="producthighlight flipped">
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b4b"
              className="textcontainer__producthighlight flipped"
            >
              <div className="label1 secondary">discover</div>
              <h2 className="white left-aligned">Search Functionality</h2>
              <p className="body2 transparent left-aligned">
                Apollos apps come standard with lightning fast Alogolia-powered
                search functionality so that you can help your users find the
                content that matters most to them.
              </p>
            </div>
            <div
              data-w-id="6f8fd971-bae1-169a-7b37-aea56b1b2b52"
              className="mockup__producthighlight"
            >
              <img
                src="/images/Mockup__Feature4.png"
                alt="Phone mockup of Christ Fellowship's app"
                srcSet="/images/Mockup__Feature4-p-500.png 500w, /images/Mockup__Feature4.png 608w"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 41vw, (max-width: 1279px) 37vw, 29vw"
                className="image__producthighlight flipped"
              />
              <div className="bubble1__casestudy white flipped _4" />
              <div className="bubble2__casestudy theporch" />
            </div>
          </div>
          <div className="producthighlight">
            <div
              data-w-id="1367bd94-d4b8-6bad-68ef-ec9e6cc57b82"
              className="textcontainer__producthighlight"
            >
              <div className="label1 secondary">Prayer</div>
              <h2 className="white left-aligned">Daily&nbsp;Prayer</h2>
              <p className="body2 transparent left-aligned">
                Help your community engage in prayer for each other daily.
                Create a sense of connection, help practice vulnerability, and
                ultimately help people grow spiritually. It’s Instagram Stories,
                but for prayer.
              </p>
            </div>
            <div
              data-w-id="1367bd94-d4b8-6bad-68ef-ec9e6cc57b89"
              className="mockup__producthighlight"
            >
              <div className="bubble2__casestudy willowcreek" />
              <div className="bubble1__casestudy white" />
              <img
                src="/images/Mockup.png"
                alt="Mockup of the Apollos login screen"
                srcSet="/images/Mockup-p-500.png 500w, /images/Mockup.png 608w"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 41vw, (max-width: 1279px) 37vw, 29vw"
                className="image__producthighlight"
              />
            </div>
          </div>
        </div>
        <div className="framework__features">
          <div className="divider">
            <div className="dividingline left tertiary" />
            <h4 className="tertiary centered fixed">
              A framework to extend existing ministries
            </h4>
            <div className="dividingline right tertiary" />
          </div>
          <div className="breakdowncontainer">
            <div className="panelcontainer">
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature1.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned framework">
                  Persona-based personalization
                </h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature2.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Email + SMS onboarding</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature3.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Search capabilities</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature4.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Campus personalization</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature5.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">
                  Community Event Calendars
                </h4>
              </div>
            </div>
            <div className="divider__framework" />
            <div className="panelcontainer right">
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature6.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Scripture Integration</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature7.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Universal media player</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature8.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Check-in wallet passes</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature1.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Push notifications</h4>
              </div>
              <div className="featurecontainer">
                <img
                  src="/images/Icon—Feature10.svg"
                  alt=""
                  className="frameworkicon"
                />
                <h4 className="white left-aligned">Robust component library</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="cta__features">
          <div className="textcontainer__cta">
            <h2 className="centered primary">
              Get your own app built on Apollos in 8 weeks
            </h2>
          </div>
          <a
            data-w-id="40ac8bf8-a0a0-fee8-d9ae-4db7a13554d9"
            href="get-started.html"
            className="button fixed secondary-color w-button"
          >
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  );
};
