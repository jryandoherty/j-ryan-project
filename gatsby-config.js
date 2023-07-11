module.exports = {
  siteMetadata: {
    title: `J. Ryan Doherty Design`,
    description: `Web design and developent for artists, small businesses, contractors and non-profits.`,
    author: `@gatsbyjs`,
    siteUrl: `https://jryandoherty.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
              "G-HJTVZF928W", // Google Analytics / GA

            ],
            // This object gets passed directly to the gtag config command
            // This config will be shared across all trackingIds
            gtagConfig: {
              optimize_id: "OPT_CONTAINER_ID",
              anonymize_ip: true,
              cookie_expires: 0,
            },
            // This object is used for configuration specific to this plugin
            pluginConfig: {
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Defaults to https://www.googletagmanager.com
              origin: "https://www.googletagmanager.com/gtag/js?id=G-HJTVZF928W",
              // Delays processing pageview events on route update (in milliseconds)
              delayOnRouteUpdate: 0,
            },
          },
        },


    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
