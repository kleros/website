import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./styles/notfoundpage.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.notfoundpage}>
      <section>
        <h1>NOT FOUND</h1>
        <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
