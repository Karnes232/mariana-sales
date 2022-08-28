module.exports = {
  siteMetadata: {
    title: `mariana-sales`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.jpg",
        name: `Mariana Sales`,
        short_name: `Mariana`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0c16d9`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
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
  ],
}
