import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
      author:"ahmednet",//replace with author name or company name
      siteUrl: "https://www.yourdomain.tld",// replace url between "" with your url
      color:"#39b3f1",// replace color between "" with your color
      robots:"index, follow"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      short_name: "ahmed",// reaplace it with your text/keyword
      name: "ahmed: what you need",// reaplace it with your text/keyword
      icon: `src/images/icon.png`, // reaplace it with your Favicon url/path
      icons: [
        {
          src: `/favicons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/favicons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
      start_url: "/",
      background_color: "#3367D6",
      display: "standalone",
      scope: "/",
      theme_color: "#3367D6",
    },
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }]
};

export default config;
