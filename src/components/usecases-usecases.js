import React from 'react';

import HorizontalCard from 'src/components/horizontal-card.js';
import { injectIntl } from 'gatsby-plugin-intl';
import useWindowDimensions from 'src/hooks/use-window-dimensions.js';
import styles from 'src/components/styles/usecases-usecases.module.css'

const UseCases = ({ titleID, figures, intl }) => {
  const { width } = useWindowDimensions();

  return (
    <section className={`light ${styles.usecases}`}>
      <h1>{intl.formatMessage({ id: titleID })}</h1>
      <div className={styles.cards}>
        {figures.map(({ icon, textID }) => (
          <HorizontalCard
            content={{
              icon: width > 336 ? icon : NaN,
              text: intl.formatMessage({ id: textID })
            }}
          />
        ))}
      </div>
    </ section>
  )
};

export default injectIntl(UseCases);
