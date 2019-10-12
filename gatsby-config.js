module.exports = {
  siteMetadata: {
    title: `BigCom.dev`,
    description: `BigCom.dev`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: "gatsby-source-bigcommerce",
      options: {
        clientId: "rsbi1lm001ylbp7zcr1p7nmkqjqezw5",
        clientSecret:
          "276f648e97cbed52360e2176b5dff2a3d609764b4f3515d99769fd6466407e2f",
        accessToken: "hzas68y21msosgq00v9gjf5fcrhszua",
        storeHash: "bq4uczryb8",
        endpoint: "/catalog/products",
        preview: true,
        logLevel: "info",
        nodeName: "BigCommerceNode",
        endpoints: {
          BigCommerceProducts: "/catalog/products?include=images",
          BigCommerceCategories: "/catalog/categories",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
