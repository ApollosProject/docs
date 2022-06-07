module.exports = {
  siteMetadata: {
    siteUrl: "https://www.apollos.app",
    title: "Apollos Apps",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    `gatsby-plugin-postcss`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};
