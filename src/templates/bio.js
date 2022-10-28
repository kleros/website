import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import { useIntl } from "gatsby-plugin-intl";
import FellowshipBadge from "src/assets/svgs/fellowship.svg";
import Kleros from "src/assets/svgs/icon-kleros.svg";
import styles from "./styles/bio.module.css";
import Aouidef from "src/assets/images/person/aouidef.png";
import Narozhny from "src/assets/images/person/narozhny.png";
import Sharma from "src/assets/images/person/sharma.png";
import Deplano from "src/assets/images/person/deplano.png";
import Dagnillo from "src/assets/images/person/dagnillo.png";
import Bergolla from "src/assets/images/person/bergolla.png";
import Scott from "src/assets/images/person/scott.png";
import Zhao from "src/assets/images/person/zhao.png";
import Gudkov from "src/assets/images/person/gudkov.png";
import Abad from "src/assets/images/person/abad.png";
import Oguz from "src/assets/images/person/oguz.png";
import Goldstein from "src/assets/images/person/goldstein.png";
import Obafemi from "src/assets/images/person/obafemi.png";
import Gouvea from "src/assets/images/person/gouvea.png";
import Felicio from "src/assets/images/person/felicio.png";
import Tineo from "src/assets/images/person/tineo.png";
import Mota from "src/assets/images/person/mota.png";
import Duarte from "src/assets/images/person/duarte.png";
import Robertson from "src/assets/images/person/robertson.png";
import Aliyev from "src/assets/images/person/aliyev.png";
import Archila from "src/assets/images/person/archila.png";
import Bhalothia from "src/assets/images/person/bhalothia.png";
import Dean from "src/assets/images/person/dean.png";
import Bel from "src/assets/images/person/bel.png";
import Gray from "src/assets/images/person/gray.png";
import Huculak from "src/assets/images/person/huculak.png";
import Jara from "src/assets/images/person/jara.png";
import Lowther from "src/assets/images/person/lowther.png";
import Kulshreshtha from "src/assets/images/person/kulshreshtha.png";
import Mouclier from "src/assets/images/person/mouclier.png";
import Comenale from "src/assets/images/person/comenale.png";
import Galindo from "src/assets/images/person/galindo.png";
import Stanescu from "src/assets/images/person/stanescu.png";
import Tripathi from "src/assets/images/person/tripathi.png";
import Vargas from "src/assets/images/person/vargas.png";
import Carrera from "src/assets/images/person/carrera.png";
import Lewis from "src/assets/images/person/lewis.png";
import Mohammadi from "src/assets/images/person/mohammadi.png";

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
  Galindo,
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
  Mohammadi,
  Narozhny,
  Tripathi,
  Sharma,
  Vargas,
};

export default ({ data }) => {
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;
  const intl = useIntl();

  const photoName = post.fields.slug.split(/\//)[1];
  const photoNameCapitalized = photoName.charAt(0).toUpperCase() + photoName.slice(1);

  return (
    <Layout>
      <SEO title="Community" />
      <div className={styles.bio}>
        <section className={styles.hero}>
          <h1>{frontmatter.name}</h1>
          <h2>{frontmatter.title}</h2>
        </section>
        <section className={styles.main}>
          <div>
            <img alt={post.frontmatter.name} src={PHOTOS[photoNameCapitalized]} />
            <div className={styles.text}>
              <h3>Bio</h3>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className={`pt-8 ${styles.embedWrapper}`}>
            {frontmatter.embedTitle && <div className="mb-2">{frontmatter.embedTitle}</div>}
            {frontmatter.embed && (
              <div className={styles.embed}>
                <iframe width="560" height="315" src={frontmatter.embed} title={frontmatter.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            )}
          </div>
          <div className={`mt-6 ${styles.buttonWrapper}`}>
            {frontmatter.report && (
              <a style={{ margin: "8px" }} className="btn btn-primary" href={frontmatter.report} target="blank" rel="noopener noreferrer">
                Download the Report
              </a>
            )}
            {frontmatter.spanishReport && (
              <a style={{ margin: "8px" }} className="btn btn-primary" href={frontmatter.spanishReport} target="blank" rel="noopener noreferrer">
                Descarga el reporte en Español
              </a>
            )}
          </div>
          <hr />
        </section>
        <section className="pt-1">
          <Contact content={{ title: intl.formatMessage({ id: "bio.section-contact.title" }) }} />
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        name
        title
        report
        spanishReport
        embed
        embedTitle
      }
    }
  }
`;
