import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import SEO from "../components/seo";

import Contact from "../components/contact";
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import styles from "./styles/bio.module.css";

import Ast from "src/assets/images/ast.png";
import Lesaege from "src/assets/images/lesaege.png";
import Malbasic from "src/assets/images/malbasic.png";
import John from "src/assets/images/john.png";
import Guérin from "src/assets/images/guerin.png";
import Alencar from "src/assets/images/alencar.png";
import Braga from "src/assets/images/braga.png";
import George from "src/assets/images/george.png";
import Glemming from "src/assets/images/glemming.png";
import Aouidef from "src/assets/images/aouidef.png";
import Tunçer from "src/assets/images/tuncer.png";
import Barcelos from "src/assets/images/barcelos.png";
import Zhang from "src/assets/images/zhang.png";
import Dmitrikov from "src/assets/images/dmitrikov.png";
import Vitello from "src/assets/images/vitello.png";
import James from "src/assets/images/james.png";
import Pichler from "src/assets/images/pichler.png";
import Fidel from "src/assets/images/fidel.png";
import Rule from "src/assets/images/rule.png";
import Dimov from "src/assets/images/dimov.png";
import Winter from "src/assets/images/winter.png";
import Narozhny from "src/assets/images/narozhny.png";
import Raczynski from "src/assets/images/raczynski.png";
import Sharma from "src/assets/images/sharma.png";
import Blazevic from "src/assets/images/blazevic.png";
import Schmitz from "src/assets/images/schmitz.png";
import Weingast from "src/assets/images/weingast.png";
import Ober from "src/assets/images/ober.png";
import Flippi from "src/assets/images/flippi.png";
import Mauer from "src/assets/images/mauer.png";
import Nappert from "src/assets/images/nappert.png";
import Deplano from "src/assets/images/deplano.png";
import Siri from "src/assets/images/siri.png";
import Hunn from "src/assets/images/hunn.png";
import Einy from "src/assets/images/einy.png";
import Stone from "src/assets/images/stone.png";
import Sills from "src/assets/images/sills.png";
import Hadfield from "src/assets/images/hadfield.png";
import Torres from "src/assets/images/torres.png";
import Monegro from "src/assets/images/monegro.png";
import Dagnillo from "src/assets/images/dagnillo.png";
import Piqueras from "src/assets/images/piqueras.png";
import Bergolla from "src/assets/images/bergolla.png";

import Scott from "src/assets/images/scott.png";
import Zhao from "src/assets/images/zhao.png";
import Gudkov from "src/assets/images/gudkov.png";
import Abad from "src/assets/images/abad.png";
import Oguz from "src/assets/images/oguz.png";
import Goldstein from "src/assets/images/goldstein.png";
import Obafemi from "src/assets/images/obafemi.png";
import Gouvea from "src/assets/images/gouvea.png";
import Felicio from "src/assets/images/felicio.png";
import Tineo from "src/assets/images/tineo.png";
import Mota from "src/assets/images/mota.png";
import Duarte from "src/assets/images/duarte.png";
import Robertson from "src/assets/images/robertson.png";
import Aliyev from "src/assets/images/aliyev.png";
import Archila from "src/assets/images/archila.png";
import Bhalothia from "src/assets/images/bhalothia.png";
import Dean from "src/assets/images/dean.png";
import Bel from "src/assets/images/bel.png";
import Gray from "src/assets/images/gray.png";
import Huculak from "src/assets/images/huculak.png";
import Jara from "src/assets/images/jara.png";
import Lowther from "src/assets/images/lowther.png";
import Kulshreshtha from "src/assets/images/kulshreshtha.png";
import Mouclier from "src/assets/images/mouclier.png";
import Comenale from "src/assets/images/comenale.png";
import G from "src/assets/images/g.png";
import Stanescu from "src/assets/images/stanescu.png";
import Tripathi from "src/assets/images/tripathi.png";
import Vargas from "src/assets/images/vargas.png";
import Carrera from "src/assets/images/carrera.png";
import Lewis from "src/assets/images/lewis.png";

const PHOTOS = {
  Scott,
  Zhao,
  Gudkov,
  Abad,
  Oguz,
  Goldstein,
  Obafemi,
  Gouvea,
  Felicio,
  Tineo,
  Mota,
  Duarte,
  Robertson,
  Aliyev,
  Archila,
  Bhalothia,
  Dean,
  Bel,
  Gray,
  Huculak,
  Jara,
  Lowther,
  Kulshreshtha,
  Mouclier,
  Comenale,
  G,
  Stanescu,
  Tripathi,
  Vargas,
  Carrera,
  Lewis,
  Aouidef,
  Huculak,
  Narozhny,
  Sharma,
  Duarte,
  Dagnillo,
  Bergolla,
  Deplano,
};

export default ({ data }) => {
  const post = data.markdownRemark;
  const intl = useIntl();
  return (
    <Layout>
      <SEO title="Community" />
      <div className={styles.bio}>
        <section className={styles.hero}>
          <h1>{post.frontmatter.name}</h1>
          <h2>{post.frontmatter.title}</h2>
        </section>
        <section className={styles.main}>
          <div>
            <img src={PHOTOS[post.frontmatter.name.split(" ")[1]]} alt={post.frontmatter.name} />
            <div className={styles.text}>
              <h3>Bio</h3>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <a className="btn btn-primary" href={post.frontmatter.report}>
              Download the Report
            </a>
          </div>
          <hr />
        </section>
        <section className="pt-1">
          <Contact content={{ icon: FellowshipBadge, title: intl.formatMessage({ id: "bio.section-contact.title" }) }} />
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        image
        title
        report
      }
    }
  }
`;
