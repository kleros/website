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
  { name: "Court", href: "https://court.kleros.io", Icon: Court, target: "_blank" },
  { name: "Escrow", href: "https://kleros.io/escrow", Icon: Escrow },
  { name: "T2CR", href: "https://tokens.kleros.io", Icon: T2CR, target: "_blank" },
  { name: "Curate", href: "https://kleros.io/curate", Icon: Curate },
  { name: "Dispute Resolver", href: "https://resolve.kleros.io", Icon: DisputeResolver, target: "_blank" },
  { name: "Uniswap Ninja", href: "https://uniswap.ninja", Icon: Ninja, target: "_blank" },
  { name: "Crypto Unlocked", href: "https://cryptounlocked.wetrust.io", Icon: PNGToIcon("Crypto Unlocked", CryptoUnlocked), target: "_blank" },
  { name: "Realitio", href: "https://realit.io", Icon: PNGToIcon("Realitio", Realitio), target: "_blank" },
  { name: "Omen", href: "https://gateway.ipfs.io/ipfs/QmbB3wA5R2PR8s87pJRSUCcBHRxAtfFtkSWmVWEcHsaFeV/#/0x592af74865799e1ed509afef002a6eca26e1caa2", Icon: PNGToIcon("Omen", Omen), target: "_blank" },
  { name: "Linguo", href: "https://linguo.kleros.io", Icon: Linguo, target: "_blank" },
];

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
        <a href={href} rel={target == "_blank" && `noopener noreferrer`} target={target}>
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
const ProductBadges = () => {
  const [hoveredName, setHoveredName] = useState();
  return (
    <AnimateSharedLayout type="crossfade">
      <div>
        {products.map(({ name, href, target, Icon }) => (
          <ProductBadge key={name} name={name} setHoveredName={setHoveredName} href={href} target={target} Icon={Icon} hoveredName={hoveredName}>
            <FormattedMessage id={`productDescriptions.${name}`} />
          </ProductBadge>
        ))}
      </div>
    </AnimateSharedLayout>
  );
};
export default ProductBadges;
