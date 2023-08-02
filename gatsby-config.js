module.exports = {
  siteMetadata: {
    siteUrl: `http://darshanwebdev.com/`,
    author: `Darshan Chobarkar`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`es`, `en`, `fr`],
        // Default site language
        defaultLanguage: `en`,
        // Redirects to `/es` in the route `/`
        redirect: false,
      },
    },
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
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
