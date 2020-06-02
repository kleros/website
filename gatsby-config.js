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
        photo: "/img/team/federico.png",
        links: {
          twitter: {
            url: "https://twitter.com/federicoast",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/federicoast/",
            fa: "fab fa-linkedin-in",
          },
        },
      },

      {
        name: "Clément Lesaege",
        title: "Co-founder, CTO",
        photo: "/img/team/clement.png",
        links: {
          twitter: {
            url: "https://twitter.com/clesaege",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/cl%C3%A9ment-lesaege-a326b9ab/",
            fa: "fab fa-linkedin-in",
          },
          github: {
            url: "https://github.com/clesaege",
            fa: "fab fa-github",
          },
        },
      },
      {
        name: "Lola Guérin",
        title: "Office Manager",
        photo: "/img/team/lola.png",
        links: {
          twitter: {
            url: "https://twitter.com/Haz3lstar",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/lola-gu%C3%A9rin-05166782/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "Stuart James",
        title: "Operations Manager",
        photo: "/img/team/stuart.png",
        links: {
          twitter: {
            url: "https://twitter.com/zambianastro",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/stuart-james-588086158/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "William George",
        title: "Research Lead",
        photo: "/img/team/william.png",
        links: {
          twitter: {
            url: "https://twitter.com/williamhwgeorge",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/william-george-128bab148/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "Sam Vitello",
        title: "DApp Developer",
        photo: "/img/team/sam.png",
        links: {
          twitter: {
            url: "https://twitter.com/satello3",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/samvitello/",
            fa: "fab fa-linkedin-in",
          },
          github: { url: "https://github.com/satello", fa: "fab fa-github" },
        },
      },
      {
        name: "Ferit Tunçer",
        title: "DApp Developer",
        photo: "/img/team/ferit.png",
        links: {
          linkedin: {
            url: "https://www.linkedin.com/in/ferit-tuncer/",
            fa: "fab fa-linkedin-in",
          },
          twitter: {
            url: "https://twitter.com/0xferittuncer",
            fa: "fab fa-twitter",
          },
          github: {
            url: "https://github.com/ferittuncer",
            fa: "fab fa-github",
          },
        },
      },
      {
        name: "Matheus Alencar",
        title: "DApp Developer",
        photo: "/img/team/matt.png",
        links: {
          twitter: {
            url: "https://twitter.com/mtsalenc",
            fa: "fab fa-twitter",
          },
          github: {
            url: "https://github.com/mtsalenc",
            fa: "fab fa-github",
          },
        },
      },
      {
        name: "Henrique Barcelos",
        title: "DApp Developer",
        photo: "/img/team/henrique.png",
        links: {
          github: { url: "https://github.com/hbarcelos", fa: "fab fa-github" },
          twitter: {
            url: "https://twitter.com/hbarcelos909",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/henriquebarcelos/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "Danil Dmitrikov",
        title: "Solidity Developer",
        photo: "/img/team/danil.png",
        links: {},
      },

      {
        name: "Plinio Braga",
        title: "UX Design Lead",
        photo: "/img/team/plinio.png",
        links: {
          twitter: {
            url: "https://twitter.com/pliniobraga_",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/pliniobraga/",
            fa: "fab fa-linkedin-in",
          },
          dribble: {
            url: "https://dribbble.com/pliniobraga",
            fa: "fab fa-dribble",
          },
        },
      },
      {
        name: "Damjan Malbasic",
        title: "Communications Lead",
        photo: "/img/team/damjan.png",
        links: {
          twitter: {
            url: "https://twitter.com/flycca",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/damjan-malba%C5%A1i%C4%87-103a2199/",
            fa: "fab fa-linkedin-in",
          },
        },
      },

      {
        name: "Tobias Glemming",
        title: "Ambassador",
        photo: "/img/team/tobias.jpg",
        links: {
          twitter: {
            url: "https://twitter.com/TGlemming",
            fa: "fab fa-twitter",
          },
          linkedin: {
            url: "https://www.linkedin.com/in/tobiasglemming/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "Laurence Zhang",
        title: "Ambassador",
        photo: "/img/team/laurence.jpg",
        links: {
          twitter: {
            url: "https://twitter.com/LaurenceZhangSG",
            fa: "fab fa-twitter",
          },
          github: {
            url: "https://github.com/lanlan3322",
            fa: "fab fa-github",
          },
        },
      },

      {
        name: "Shebin John",
        title: "DApp Developer",
        photo: "/img/team/henrique.png",
        links: {
          github: { url: "https://github.com/remedcu", fa: "fab fa-github" },
          linkedin: {
            url: "https://www.linkedin.com/in/shebinjohn/",
            fa: "fab fa-linkedin-in",
          },
        },
      },
      {
        name: "Yann",
        title: "DApp Developer",
        photo: "/img/team/henrique.png",
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
