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
        icon: `src/images/favicon@2x.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
       resolve: `gatsby-plugin-humans-txt`,
       options: {
         team: [
           {
             Developer: `J. Ryan Doherty`,
             GitHub: `jryandoherty`,
             Twitter: `@jryandoherty`
           }
         ],
         thanks: [`Gatsby`, `Node`, `Disco Biscuits`, `Phish`],
         site: {
           'Last update': `2023/7/12`,
           Standards: `JavaScript`,
           Components: `humans-generator`
         },
         note: `Congrats, you've found a humans.txt file. I'm impressed, that's for sure.`
       }
     },

  ],
}
