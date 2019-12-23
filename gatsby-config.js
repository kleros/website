let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful");
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  );
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ko`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: "gatsby-source-twitter",
      options: {
        credentials: {
          consumer_key: "Bc2TcAfEnu8QqF8opdKiJggWY",
          consumer_secret: "v7oxAwQ5zbZKuJnZQB9PFRHgydz4O11WjRSroIOqrYCzPlDsE1",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAAAdn9QAAAAAA4DRYBSHNA4%2BejsGpq1Km6D0m2EQ%3DzH9UERJjbfGYmNGi9peanWx3vVy4BIec6Cv0vKEatI3vCngAB0"
        },
        queries: {
          kleros: {
            endpoint: "search/tweets",
            params: {
              q: "@Kleros_io",
              tweet_mode: "extended"
            }
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-103362452-1"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        },
        pluginConfig: {
          exclude: ["/preview/**", "/do-not-track/me/too/"]
        }
      }
    }
  ]
};
