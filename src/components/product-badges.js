import classnames from "classnames";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useState } from "react";

import styles from "./styles/product-badges.module.css";

const _ProductBadge = ({ name, hovered, setHoveredName, href, target, Icon, children }) => {
  return (
    <div className={classnames(styles.productBadgePositioner, { [styles.hoveredProductBadgePositioner]: hovered })}>
      <motion.div
        className={styles.productBadgeLayout}
        layoutId={name}
        onHoverStart={!hovered && (() => setHoveredName(name))}
        onHoverEnd={hovered && (() => setHoveredName())}
        onClick={(event) => {
          if (!hovered) {
            event.preventDefault();
            setHoveredName(name);
          }
        }}
      >
        <a href={href} rel={target == "_blank" ? `noopener noreferrer` : ""} target={target}>
          <div className={classnames(styles.productBadgeBadge, { [styles.hoveredProductBadgeBadge]: hovered })}>
            <Icon className={classnames(styles.productBadgeIcon, { [styles.hoveredProductBadgeIcon]: hovered })} />
            {hovered && (
              <p className={styles.productBadgeDescription}>
                <hr className={styles.productBadgeDivider} />
                {children}
                <hr className={styles.productBadgeDivider} />
              </p>
            )}
          </div>
        </a>
        {!hovered && <p className={styles.productBadgeName}>{name}</p>}
      </motion.div>
    </div>
  );
};
const ProductBadge = ({ name, setHoveredName, href, target, Icon, hoveredName, children }) => {
  return (
    <div className={styles.productBadge}>
      <_ProductBadge name={name} setHoveredName={setHoveredName} href={href} target={target} Icon={Icon} />
      <AnimatePresence>
        {name === hoveredName && (
          <_ProductBadge name={name} hovered setHoveredName={setHoveredName} href={href} Icon={Icon}>
            {children}
          </_ProductBadge>
        )}
      </AnimatePresence>
    </div>
  );
};
const ProductBadges = ({ title, items = [] }) => {
  const [hoveredName, setHoveredName] = useState();
  return (
    <div>
      <div className={styles.title}>{title}</div>

      <AnimateSharedLayout type="crossfade">
        <div>
          {items.map(({ name, href, target, Icon }) => (
            <ProductBadge key={name} name={name} setHoveredName={setHoveredName} href={href} target={target} Icon={Icon} hoveredName={hoveredName}>
              <FormattedMessage id={`productDescriptions.${name}`} />
            </ProductBadge>
          ))}
        </div>
      </AnimateSharedLayout>
    </div>
  );
};
export default ProductBadges;
