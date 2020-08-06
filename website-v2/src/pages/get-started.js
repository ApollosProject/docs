import Layout from '@theme/Layout';
import React from 'react';

export default () => {
  return (
    <Layout>
      <div className="dark">
        <div className="hero__get-started w-clearfix">
          <div className="contentcontainer__hero-getstarted">
            <div className="textcontainer__get-started">
              <h1 className="white left-aligned">
                Any church can have an app built on Apollos in 8 weeks
              </h1>
              <p className="body1 transparent shrunk">
                We’re committed to setting your church up for success and
                guiding you every step of the journey.
              </p>
            </div>
            <a href="#email-form" className="button white w-button">
              Learn How
            </a>
          </div>
          <img
            src="/images/Illustration.svg"
            alt="Apollos logo circular illustration"
            className="illustration__get-started"
          />
        </div>
        <div className="cards__get-started">
          <div className="textcontainer__get-started centered">
            <h2 className="white">
              Let’s advance the Kingdom by building collectively as the big “C”
              Church.
            </h2>
            <p className="body2 transparent shrunk">
              We believe it’s time for the Church to step up and leverage
              cutting-edge technology to bring people close to Jesus. The
              Apollos Project is the manifestation of that belief.
            </p>
          </div>
          <div className="cardscontainer__get-started">
            <div className="ctacard">
              <div className="textcontainer__ctacard">
                <h3 className="primary">Join our Slack community</h3>
                <div className="body4">
                  Connect with other churches and take a peak at what we're
                  building for the Church.
                </div>
              </div>
              <img
                src="/images/Illustration—Slack.svg"
                alt="Slack community illustration"
                className="illustration-card__get-started"
              />
              <a
                href="https://join.slack.com/t/apollosapp/shared_invite/zt-3zbknn9u-_jkt0eMIEbzJmBjJrehEmg"
                target="_blank"
                className="button ghost w-button"
              >
                Join Slack
              </a>
            </div>
            <div className="ctacard">
              <div className="textcontainer__ctacard">
                <h3 className="primary">Check out our developer docs</h3>
                <div className="body4">
                  Want to start building on your own? Take a look through our
                  documentation.
                </div>
              </div>
              <img
                src="/images/Illustration—Docs.svg"
                alt="Illustration of developer documentation"
                className="illustration-card__get-started"
              />
              <a
                href="https://apollosapp.io/docs/install"
                target="_blank"
                className="button ghost w-button"
              >
                View Documentation
              </a>
            </div>
          </div>
          <div className="formcontainer">
            <h1 className="white">Connect with the Core Apollos team</h1>
            <p className="body2 transparent">
              Our mission is to get your church set up for success and to help
              you every step of the journey. Take the first step towards
              launching your own Apollos app today by reaching out and saying
              hello.
            </p>
          </div>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form"
            >
              <label htmlFor="name" className="body3 transparent">
                Your Name
              </label>
              <input
                type="text"
                className="input w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder
                id="name"
                required
              />
              <label htmlFor="Church-Name" className="body3 transparent">
                Church Name
              </label>
              <input
                type="text"
                className="input w-input"
                maxLength={256}
                name="Church-Name"
                data-name="Church Name"
                placeholder
                id="Church-Name"
                required
              />
              <label htmlFor="Email-3" className="body3 transparent">
                Your Email
              </label>
              <input
                type="email"
                className="input w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder
                id="Email-3"
                required
              />
              <label htmlFor="Message" className="body3 transparent">
                How can Apollos help you?
              </label>
              <textarea
                data-name="Message"
                maxLength={5000}
                id="Message"
                name="Message"
                required
                className="input textarea w-input"
                defaultValue={''}
              />
              <input
                type="submit"
                defaultValue="Submit"
                data-wait="Please wait..."
                className="button white contact w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
