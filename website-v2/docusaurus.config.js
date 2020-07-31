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
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "The Apollos Project",
      "logo": {
        "src": "img/brand/wordmark.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
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