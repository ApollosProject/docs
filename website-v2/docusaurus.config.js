module.exports={
  "title": "The Apollos Project",
  "tagline": "Bring your congregation closer to Jesus.",
  "url": "https://apollosapp.io",
  "baseUrl": "/",
  "organizationName": "ApollosProject",
  "projectName": "docs",
  "favicon": "img/favicon.png",
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "theme": {
          "customCss": require.resolve('./src/css/custom.css'),
        },
        "docs": {
          "homePageId": "install",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": require.resolve('./sidebars.json'),
        },
        "blog": {
          "path": "blog"
        },
      }
    ]
  ],
  // "stylesheets": [
  //   '/css/normalize.css',
  //   '/css/webflow.css',
  //   '/css/theapollosproject.webflow.css',
  // ],
  "scripts": [
    "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e974c89dfe70106c6183e08",
    "/js/webflow.js"
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "logo": {
        "src": "img/brand/wordmark.png"
      },
      "items": [
        {
          "to": "features/",
          "label": "Features",
          "position": "left"
        },
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "get-started/",
          "label": "Get Started",
          "position": "right"
        }
      ]
    },
    "image": "img/apollos.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2020 Apollos Project",
      "logo": {
        "src": "img/apollos.png"
      }
    }
  }
}