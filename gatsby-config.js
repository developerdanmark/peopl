module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '0ionf5c6',
        dataset: 'production',

        // a token with read permissions is required
        // if you have a private dataset
        token: 'sk4CNxGVO4Hsny4QJjKm7JkTzHsJSQexSCiCLVwx7A9FL0QUDcTvY9SECcNL9DAvzJZD626KGf7px9GMuRRtmYsYzYsSulvGXdtbgGGIZ67ZBkeWebgHH6Q9icOYFhMbLDJoRWI4ykfaHxYTheSEn7xO2FkByYQQ64jO2hJwd46otlh16Xpy',//process.env.MY_SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Poppins:500,600,700', 'Work Sans:200,400,500,600']
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`500`, `600`,`700`]
          },
          {
            family: `Work Sans`,
            variants: [`200`, `400`,`500`,`600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
    }
  ],
}