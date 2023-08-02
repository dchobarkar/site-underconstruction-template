module.exports = {
  siteMetadata: {
    siteUrl: `http://darshanwebdev.com/`,
    author: `Darshan Chobarkar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`es`, `en`, `fr`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    // {
    // resolve: `gatsby-plugin-manifest`,
    // options: {
    //   name: `site-under-construction-template`,
    //   short_name: `underconstruction`,
    //   start_url: `/`,
    //   background_color: `#663399`,
    //   theme_color: `#663399`,
    //   display: `minimal-ui`,
    //   //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    // },
    // },
  ],
};
