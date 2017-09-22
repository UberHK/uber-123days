module.exports = {
  siteMetadata: {
    title: 'Uber｜123日改變'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-105661059-1'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P3JNPKR'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Uber｜123日改變',
        short_name: 'Uber｜123日改變',
        start_url: './',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/favicons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: '/favicons/apple-touch-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicons/apple-touch-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/apple-touch-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
};
