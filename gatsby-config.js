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
        name: "Yann Aouidef",
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
        links: { linkedin: "https://www.linkedin.com/in/lorenshuculak/", twitter: "https://twitter.com/lorenshuculak" },
        location: "Belgium",
        batch: 3,
      },
      {
        name: "Ning Fidel",
        title: "General Assistant",
        links: {},
      },
      {
        name: "Colin Rule",
        title: "Vice President for Online Dispute Resolution, Tyler Technologies",
        links: {},
      },
      {
        name: "Joseph Raczynski",
        title: "Technologist and Futurist, Thomson Reuters Legal",
        links: {},
      },
      {
        name: "Barry Weingast",
        title: "Ward C. Krebs Family Professor, Stanford University",
        links: {},
      },
      {
        name: "Josiah Ober",
        title: "Mitsotakis Professor, School of Humanities and Science, Stanford University",
        links: {},
      },
      {
        name: "Eyal Winter",
        title: "Professor of Economics, Hebrew University of Jerusalem",
        links: {},
      },
      {
        name: "Peter Stone",
        title: "Associate Professor, Trinity College, Dublin",
        links: {},
      },
      {
        name: "Kate Sills",
        title: "Community Lead, Agoric",
        links: {},
      },
      {
        name: "Gillian Hadfield",
        title: "Law Professor",
        links: {},
      },
      {
        name: "Sophie Nappert",
        title: "International Arbitrator",
        links: {},
      },
      {
        name: "Alice Namuli Blazevic",
        title: "Associate Partner, Messrs. Katende Ssempebwa & Company Advocates",
        links: {},
      },
      {
        name: "Jose Torres",
        title: "Former Fellow atr The Legal Design Lab - Stanford University",
        links: {},
      },
      {
        name: "Amy Schmitz",
        title: "Professor, University of Missouri School of Law",
        links: {},
      },
      {
        name: "Joel Monegro",
        title: "Partner, Placeholder",
        links: {},
      },
      {
        name: "Santiago Siri",
        title: "President, Democracy Earth Foundation",
        links: {},
      },
      {
        name: "Primavera de Flippi",
        title: "Faculty Associate at the Berkman Center for Internet & Society at Harvard Law School",
        links: {},
      },
      {
        name: "Rossana Deplano",
        title: "Law Professor, Leicester University",
        links: {},
        location: "England",
        batch: 1,
      },
      {
        name: "Nicolas Dagnillo",
        title: "Financial Analyst",
        links: {},
        location: "Argentina",
        batch: 1,
      },
      {
        name: "Enrique Piqueras",
        title: "Former Lead Developer",
        links: {},
      },
      {
        name: "Orna Rabinovich Einy",
        title: "Associate Professor, Faculty of Law, University of Haifa",
        links: {},
      },
      {
        name: "Peter Hunn",
        title: "Founder, Clause.io and the Accord Project",
        links: {},
      },
      {
        name: "Daniel Dimov",
        title: "Founder, Clause.io and the Accord Project",
        links: {},
      },
      {
        name: "Marco Mauer",
        title: "Attorney and Notary, Specialist in Energy Infrastructure Investment Law",
        links: {},
      },
      {
        name: "Dmitry Narozhny",
        title: "Civil Law Attorney",
        links: {},
        location: "Russia",
        batch: 1,
      },
      {
        name: "Luis Bergolla",
        title: "Doctoral Student",
        links: {},
        location: "USA",
        batch: 1,
      },
      {
        name: "Abeer Sharma",
        title: "International Arbitration",
        links: {},
        location: "England",
        batch: 1,
      },
      { name: "Eric Martin Scott", title: "Public Law & Cyber Security", location: "USA", batch: 1 },
      { name: "Tian Zhao", title: "Systems Engineering", location: "Canada", batch: 1 },
      { name: "Aleksei Gudkov", title: "Researcher", location: "Russia", batch: 2 },
      { name: "David Abad", title: "Architect and Mediator", location: "Spain", batch: 2 },
      { name: "Dorukhan Oguz", title: "Corporate Lawyer", location: "Turkey", batch: 2 },
      { name: "Elliot Talbert Goldstein", title: "Assistant Director", location: "USA", batch: 2 },
      { name: "Faith Obafemi", title: "Head of Strategy", location: "Nigeria", batch: 2 },
      { name: "Flávio Freitas Gouvea", title: "Lawyer, Mediator", location: "Brazil", batch: 2 },
      { name: "Sahelê Felicio", title: "Corporate Lawyer", location: "Brazil", batch: 2 },
      { name: "Julieta Tineo", title: "Digital Law Specialist", location: "Argentina", batch: 2 },
      { name: "Kizzy Mota", title: "Digital Law Specialist", location: "Brazil", batch: 2 },
      { name: "Mauricio Duarte", title: "Attorney and Notary", location: "Guatemala", batch: 2 },
      { name: "Mars Robertson", title: "Chief Integration Officer", location: "UK", batch: 2 },
      { name: "Mübariz Aliyev", title: "Tech Lawyer", location: "Azerbaijan", batch: 3 },
      { name: "Paolo Archila", title: "Attorney and Notary Public", location: "Guatemala", batch: 3 },
      { name: "Sandeep Bhalothia", title: "Technology Arbitrator", location: "India", batch: 3 },
      { name: "Robert Dean", title: "Construction Arbitrator", location: "UK", batch: 3 },
      { name: "Marta García Bel", title: "International Arbitration Lawyer", location: "USA", batch: 3 },
      { name: "Scott Gray", title: "Economist", location: "USA", batch: 3 },
      { name: "José María de la Jara", title: "Digital Arbitration Attorney", location: "Peru", batch: 3 },
      { name: "Jake Lowther", title: "Dispute Resolution Expert", location: "Australia", batch: 3 },
      { name: "Shraddha Kulshreshtha", title: "Commercial and Business Lawyer", location: "India", batch: 3 },
      { name: "Emmanuel Mouclier", title: "Legaltech Entrepreneur", location: "USA", batch: 3 },
      { name: "Agustina Perez Comenale", title: "Attorney and Notary", location: "Uruguay", batch: 3 },
      { name: "Diana I. Santana G.", title: "Attorney", location: "Mexico", batch: 3 },
      { name: "Alex Stanescu", title: "International Arbitrator", location: "Romania", batch: 3 },
      { name: "Anjali Tripathi", title: "Law Student", location: "India", batch: 3 },
      { name: "Esthefania Vargas", title: "Attorney", location: "Colombia", batch: 3 },
      { name: "Mauricio Virues Carrera", title: "Dispute Resolution Professional", location: "Mexico", batch: 3 },
      { name: "Dr. David Lewis", title: "Corporate and Organisational Mediator", location: "USA", batch: 3 },
    ],
  },

  plugins: [
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        // languages: [`en`, `ko`, `es`, `ru`, `fr`, "tr", "pt", "zh", "pt-br"],
        languages: [`en`, `es`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
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
