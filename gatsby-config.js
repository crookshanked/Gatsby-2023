/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kyle Crookshank Web Development`,
    siteUrl: `https://www.crookshanked.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `iching`,
        path: `${__dirname}/iching`,
      }
    },
  ],
}
