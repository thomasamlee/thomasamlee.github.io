/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Thomas Amlee`,
    author: `Thomas Amlee`,
    firstName: `Thomas`,
    lastName: `Amlee`,
    email: "thomasamlee@gmail.com",
    description: `Thomas Amlee's portfolio site`,
    occupation: `Software Engineer`,
    github: "https://github.com/thomasamlee",
    linkedin: "https://linkedin.com/in/thomasamlee",
    resume:
      "https://drive.google.com/file/d/10rT2x0vePmtaufYAGagAQkVve-Mb56Au/view?usp=sharing",
    keywords: [`Thomas`, `Tom`, `Amlee`, `Personal`, `Resume`, "Portfolio"],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas's Personal Site`,
        short_name: `Tom`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
