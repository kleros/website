const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Kleros`,
    description: `The blockchain dispute resolution layer. Fast, open and affordable justice for all.`,
    author: `Kleros`,
    teamMembers: [
      {
        name: "Federico Ast",
        title: "Co-founder, CEO",
        links: {
          twitter: "https://twitter.com/federicoast",
          linkedin: "https://www.linkedin.com/in/federicoast/",
        },
      },

      {
        name: "Clément Lesaege",
        title: "Co-founder, CTO",
        links: {
          twitter: "https://twitter.com/clesaege",
          linkedin: "https://www.linkedin.com/in/cl%C3%A9ment-lesaege-a326b9ab/",
          github: "https://github.com/clesaege",
        },
      },
      {
        name: "Lola Guérin",
        title: "Office Manager",
        links: {
          twitter: "https://twitter.com/Haz3lstar",
          linkedin: "https://www.linkedin.com/in/lola-gu%C3%A9rin-05166782/",
        },
      },
      {
        name: "Stuart James",
        title: "Operations Manager",
        links: {
          twitter: "https://twitter.com/zambianastro",
          linkedin: "https://www.linkedin.com/in/stuart-james-588086158/",
        },
      },
      {
        name: "William George",
        title: "Research Lead",
        links: {
          twitter: "https://twitter.com/williamhwgeorge",
          linkedin: "https://www.linkedin.com/in/william-george-128bab148/",
        },
      },
      {
        name: "Sam Vitello",
        title: "DApp Developer",
        links: {
          twitter: "https://twitter.com/satello3",
          linkedin: "https://www.linkedin.com/in/samvitello/",
          github: "https://github.com/satello",
        },
      },
      {
        name: "Ferit Tunçer",
        title: "DApp Developer",
        links: {
          linkedin: "https://www.linkedin.com/in/ferit-tuncer/",
          twitter: "https://twitter.com/0xferittuncer",
          github: "https://github.com/ferittuncer",
        },
      },
      {
        name: "Matheus Alencar",
        title: "DApp Developer",
        links: {
          twitter: "https://twitter.com/mtsalenc",
          github: "https://github.com/mtsalenc",
        },
      },
      {
        name: "Henrique Barcelos",
        title: "DApp Developer",
        links: {
          github: "https://github.com/hbarcelos",
          twitter: "https://twitter.com/hbarcelos909",
          linkedin: "https://www.linkedin.com/in/henriquebarcelos/",
        },
      },
      {
        name: "Danil Dmitrikov",
        title: "Solidity Developer",
        links: {},
      },

      {
        name: "Plinio Braga",
        title: "UX Design Lead",
        links: {
          twitter: "https://twitter.com/pliniobraga_",
          linkedin: "https://www.linkedin.com/in/pliniobraga/",
          dribble: "https://dribbble.com/pliniobraga",
        },
      },
      {
        name: "Damjan Malbasic",
        title: "Communications Lead",
        links: {
          twitter: "https://twitter.com/flycca",
          linkedin: "https://www.linkedin.com/in/damjan-malba%C5%A1i%C4%87-103a2199/",
        },
      },

      {
        name: "Tobias Glemming",
        title: "Ambassador",
        links: {
          twitter: "https://twitter.com/TGlemming",
          linkedin: "https://www.linkedin.com/in/tobiasglemming/",
        },
      },
      {
        name: "Laurence Zhang",
        title: "Ambassador",
        links: {
          twitter: "https://twitter.com/LaurenceZhangSG",
          github: "https://github.com/lanlan3322",
        },
      },

      {
        name: "Shebin John",
        title: "Solidity Developer",
        links: {
          github: "https://github.com/remedcu",
          linkedin: "https://www.linkedin.com/in/shebinjohn/",
        },
      },
      {
        name: "Yann",
        title: "PhD Researcher",
        links: {},
      },
      {
        name: "Karla Pichler",
        title: "Graphics Designer",
        links: {},
      },
      {
        name: "Lorens Huculak",
        title: "Layer 2 Entrepreneur and Fellow",
        links: {},
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kleros`,
        start_url: `/`,
        background_color: `#4d00b4`,
        theme_color: `#d8b6ff`,
        display: `minimal-ui`,
        icon: `src/assets/svgs/kleros.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ko`, `es`, `ru`, `fr`, "tr", "pt", "zh", "pt-br"],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
  ],
};
