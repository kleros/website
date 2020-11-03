import classnames from "classnames";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useState } from "react";

import Court from "../assets/svgs/kleros.svg";
import Escrow from "../assets/svgs/escrow.svg";
import T2CR from "../assets/svgs/t2cr.svg";
import Curate from "../assets/svgs/curate.svg";
import DisputeResolver from "../assets/svgs/dispute-resolver.svg";
import Ninja from "../assets/svgs/ninja.svg";
import CryptoUnlocked from "src/assets/images/crypto-unlocked.png";
import Realitio from "src/assets/images/realitio.png";
import Omen from "src/assets/images/omen.png";
import Linguo from "../assets/svgs/linguo.svg";

import styles from "./styles/product-badges.module.css";

const PNGToIcon = (alt, PNG) => (props) => <img alt={alt} src={PNG} {...props} />;
const products = [
  { name: "Court", href: "https://court.kleros.io", Icon: Court },
  { name: "Escrow", href: "https://escrow.kleros.io", Icon: Escrow },
  { name: "T2CR", href: "https://tokens.kleros.io", Icon: T2CR },
  { name: "Curate", href: "https://curate.kleros.io", Icon: Curate },
  { name: "Dispute Resolver", href: "https://resolve.kleros.io", Icon: DisputeResolver },
  { name: "Uniswap Ninja", href: "https://uniswap.ninja", Icon: Ninja },
  { name: "Crypto Unlocked", href: "https://cryptounlocked.wetrust.io", Icon: PNGToIcon("Crypto Unlocked", CryptoUnlocked) },
  { name: "Realitio", href: "https://realit.io", Icon: PNGToIcon("Realitio", Realitio) },
  { name: "Omen", href: "https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2", Icon: PNGToIcon("Omen", Omen) },
  { name: "Linguo", href: "https://linguo-beta.netlify.app/", Icon: Linguo },
];

const _ProductBadge = ({ name, hovered, setHoveredName, href, Icon, children }) => {
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
        <a href={hovered && href} rel="noopener noreferrer" target="_blank">
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
const ProductBadge = ({ name, setHoveredName, href, Icon, hoveredName, children }) => {
  return (
    <div className={styles.productBadge}>
      <_ProductBadge name={name} setHoveredName={setHoveredName} href={href} Icon={Icon} />
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
const ProductBadges = () => {
  const [hoveredName, setHoveredName] = useState();
  return (
    <AnimateSharedLayout type="crossfade">
      <div>
        {products.map(({ name, href, Icon }) => (
          <ProductBadge key={name} name={name} setHoveredName={setHoveredName} href={href} Icon={Icon} hoveredName={hoveredName}>
            <FormattedMessage id={`productDescriptions.${name}`} />
          </ProductBadge>
        ))}
      </div>
    </AnimateSharedLayout>
  );
};
export default ProductBadges;
