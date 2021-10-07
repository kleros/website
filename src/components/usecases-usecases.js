import React from 'react';

import HorizontalCard from 'src/components/horizontal-card.js';
import { injectIntl } from 'gatsby-plugin-intl';
import styles from 'src/components/styles/usecases-usecases.module.css'

const UseCases = ({ titleID, figures, intl }) => (
  <section className={`light ${styles.usecases}`}>
    <h1>{intl.formatMessage({ id: titleID })}</h1>
    <div className={styles.cards}>
      {figures.map(({ icon, textID }) => (
        <HorizontalCard
          content={{
            icon: icon,
            text: intl.formatMessage({ id: textID })
          }}
        />
      ))}
    </div>
  </ section>
);

export default injectIntl(UseCases);
