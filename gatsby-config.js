const path = require('path');

module.exports = {
  siteMetadata: {
    defaultTitle: 'Teddy Byron',
    defaultAuthor: 'Teddy Byron',
    defaultDescription: 'Teddy Byron\'s website and blog.',
    siteUrl: 'https://tedbyron.com',
    referrer: 'no-referrer-when-downgrade',
    colorScheme: 'only light',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://tedbyron.com',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tedbyron.com',
        short_name: 'tedbyron.com',
        description: 'Teddy Byron\'s website and blog.',
        lang: 'en',
        display: 'minimal-ui',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#b86bff',
        include_favicon: false,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: [
          '___gatsby',
          'gatsby-focus-wrapper',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: path.join(__dirname, 'static', 'assets'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
  ],
};
