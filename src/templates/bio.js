import React from "react";
import { graphql } from "gatsby";
import Layout from "src/components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";
import { useIntl } from "gatsby-plugin-intl";
import styles from "./styles/bio.module.css";
import Narozhny from "src/assets/images/person/narozhny.png";
import Sharma from "src/assets/images/person/sharma.png";
import Deplano from "src/assets/images/person/deplano.png";
import Bergolla from "src/assets/images/person/bergolla.png";
import Scott from "src/assets/images/person/scott.png";
import Zhao from "src/assets/images/person/zhao.png";
import Gudkov from "src/assets/images/person/gudkov.png";
import Abad from "src/assets/images/person/abad.png";
import Goldstein from "src/assets/images/person/goldstein.png";
import Obafemi from "src/assets/images/person/obafemi.png";
import Tineo from "src/assets/images/person/tineo.png";
import Duarte from "src/assets/images/person/duarte.png";
import Archila from "src/assets/images/person/archila.png";
import Lowther from "src/assets/images/person/lowther.png";
import Comenale from "src/assets/images/person/comenale.png";
import Galindo from "src/assets/images/person/galindo.png";
import Vargas from "src/assets/images/person/vargas.png";
import Carrera from "src/assets/images/person/carrera.png";
import Mohammadi from "src/assets/images/person/mohammadi.png";
import Oladimeji from "src/assets/images/person/oladimeji.png";
import Lin from "src/assets/images/person/lin.png";
import Zeballos from "src/assets/images/person/zeballos.png";
import Gaspar from "src/assets/images/person/gaspar.png";
import Tewari from "src/assets/images/person/tewari.png";
import Poenicke from "src/assets/images/person/poenicke.png";

const PHOTOS = {
  Abad,
  Archila,
  Bergolla,
  Carrera,
  Comenale,
  Deplano,
  Duarte,
  Galindo,
  Gaspar,
  Goldstein,
  Gudkov,
  Lin,
  Lowther,
  Mohammadi,
  Narozhny,
  Obafemi,
  Oladimeji,
  Poenicke,
  Scott,
  Sharma,
  Tewari,
  Tineo,
  Vargas,
  Zeballos,
  Zhao,
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
              <a style={{ margin: "8px" }} className="btn btn-primary" href={frontmatter.report} target="_blank" rel="noopener noreferrer">
                Download the Report
              </a>
            )}
            {frontmatter.spanishReport && (
              <a style={{ margin: "8px" }} className="btn btn-primary" href={frontmatter.spanishReport} target="_blank" rel="noopener noreferrer">
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
