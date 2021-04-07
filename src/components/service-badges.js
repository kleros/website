import classnames from "classnames";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useState } from "react";

import Court from "../assets/svgs/kleros.svg";
import Escrow from "../assets/svgs/escrow.svg";
import Oracle from "../assets/svgs/oracle.svg";

import T2CR from "../assets/svgs/t2cr.svg";
import Curate from "../assets/svgs/curate.svg";
import DisputeResolver from "../assets/svgs/dispute-resolver.svg";
import Ninja from "../assets/svgs/ninja.svg";
import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";
import Omen from "src/assets/images/omen.png";
import Linguo from "../assets/svgs/linguo.svg";
import Revoke from "../assets/svgs/revoke.svg";

import styles from "./styles/product-badges.module.css";

const PNGToIcon = (alt, PNG) => (props) => <img alt={alt} src={PNG} {...props} />;
const services = [
  { name: "Court", href: "https://court.kleros.io", Icon: Court, target: "_blank" },
  { name: "Oracle", href: "https://court.kleros.io", Icon: Oracle, target: "_blank" },
  { name: "Governor", href: "https://court.kleros.io", Icon: Court, target: "_blank" },
  { name: "Escrow", href: "https://kleros.io/escrow", Icon: Escrow, target: "_blank" },
  { name: "Curate", href: "https://kleros.io/curate", Icon: Curate, target: "_blank" },
];

const _ServiceBadge = ({ name, hovered, setHoveredName, href, target, Icon, children }) => {
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
const ServiceBadge = ({ name, setHoveredName, href, target, Icon, hoveredName, children }) => {
  return (
    <div className={styles.productBadge}>
      <_ServiceBadge name={name} setHoveredName={setHoveredName} href={href} target={target} Icon={Icon} />
      <AnimatePresence>
        {name === hoveredName && (
          <_ServiceBadge name={name} hovered setHoveredName={setHoveredName} href={href} Icon={Icon}>
            {children}
          </_ServiceBadge>
        )}
      </AnimatePresence>
    </div>
  );
};
const ServiceBadges = () => {
  const [hoveredName, setHoveredName] = useState();
  return (
    <AnimateSharedLayout type="crossfade">
      <div>
        {services.map(({ name, href, target, Icon }) => (
          <ServiceBadge key={name} name={name} setHoveredName={setHoveredName} href={href} target={target} Icon={Icon} hoveredName={hoveredName}>
            <FormattedMessage id={`productDescriptions.${name}`} />
          </ServiceBadge>
        ))}
      </div>
    </AnimateSharedLayout>
  );
};
export default ServiceBadges;
