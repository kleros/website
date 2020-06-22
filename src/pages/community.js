import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import styles from "./styles/community.module.css";

const Community = () => (
  <Layout>
    <SEO title="Community" />
    <div className={styles.community}>asda</div>
  </Layout>
);

export default injectIntl(Community);
