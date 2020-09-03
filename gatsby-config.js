module.exports = {
  siteMetadata: {
    title: 'stats.seandolinar.com',
  },
  plugins: [
    'gatsby-plugin-twitter',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://stats.seandolinar.com`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-46773652-1',
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Any additional create only fields (optional)
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "seandolinar.com",
    //   },
    // },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "new2.seandolinar.com",
        // baseUrl: "www.seandolinar.com/test",
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,
  
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // wpcom_app_clientSecret:
          //   "NMPnXYFtj2gKas7V1kZyMxr7oLry9V5ZxIyBQGu2txjVHg0GhFz6RYcKopkHICYg",
          // wpcom_app_clientId: "54793",
          // wpcom_user: "gatsbyjswpexample@gmail.com",
          // wpcom_pass: "very-secured-password",
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // change this to fix my problem ^
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "http://stats.seandolinar.com",
          replacementUrl: "https://stats.seandolinar.com",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 1000,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media", //media takes a long time
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "/*/*/posts/1456",
          // "/*/*/media"
        ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    }
  ],
}
