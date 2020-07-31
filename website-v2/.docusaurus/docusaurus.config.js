export default {
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
          "customCss": "/Users/conradvanlandingham/Sites/docs/website-v2/src/css/custom.css"
        },
        "docs": {
          "homePageId": "install",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "/Users/conradvanlandingham/Sites/docs/website-v2/sidebars.json"
        },
        "blog": {
          "path": "blog"
        }
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
      ],
      "hideOnScroll": false
    },
    "image": "img/apollos.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2020 Apollos Project",
      "logo": {
        "src": "img/apollos.png"
      },
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    }
  },
  "customFields": {},
  "themes": []
};