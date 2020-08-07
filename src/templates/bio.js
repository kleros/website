import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import { useIntl } from "gatsby-plugin-intl";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import styles from "./styles/bio.module.css";
import Aouidef from "src/assets/images/aouidef.png";
import Narozhny from "src/assets/images/narozhny.png";
import Sharma from "src/assets/images/sharma.png";
import Deplano from "src/assets/images/deplano.png";
import Dagnillo from "src/assets/images/dagnillo.png";
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
  Abad,
  Felicio,
  Goldstein,
  Gouvea,
  Duarte,
  Gudkov,
  Aliyev,
  Mota,
  Archila,
  Scott,
  Bel,
  Zhao,
  Bhalothia,
  Dean,
  Oguz,
  Gray,
  Obafemi,
  Comenale,
  G,
  Tineo,
  Carrera,
  Aouidef,
  Robertson,
  Huculak,
  Jara,
  Bergolla,
  Kulshreshtha,
  Dagnillo,
  Lowther,
  Deplano,
  Mouclier,
  Lewis,
  Stanescu,
  Narozhny,
  Tripathi,
  Sharma,
  Vargas,
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
            <img alt={post.frontmatter.name} src={PHOTOS[post.frontmatter.name.split(/(\s)/).slice(-1)]} />
            <div className={styles.text}>
              <h3>Bio</h3>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            {post.frontmatter.report && (
              <a className="btn btn-primary" href={post.frontmatter.report} target="blank" rel="noopener noreferrer">
                Download the Report
              </a>
            )}
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
