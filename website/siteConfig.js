/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'NewSpring',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/newspring.png',
    infoLink: 'https://www.newspring.cc',
    pinned: true,
  },
];

const siteConfig = {
  title: 'The Apollos Project', // Title for your website.
  tagline: 'Bring your congregation closer to Jesus.',
  url: 'https://apollosapp.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'ApollosProject',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  cname: 'apollosapp.io',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'install', label: 'Docs' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],

  // algolia search settings
  // algolia: {
  //   apiKey: "XXXX",
  //   indexName: "my-index-name",
  //   algoliaOptions: {}
  // },

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/brand/wordmark.png',
  footerIcon: 'img/apollos.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00676D',
    secondaryColor: '#18B582',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Apollos Project`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/apollos.png',
  twitterImage: 'img/apollos.png',
  disableHeaderTitle: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
