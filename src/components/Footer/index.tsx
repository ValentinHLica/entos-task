import React from "react";

import styles from "@styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <p>
        Developed with <span className={styles.heart} title="love" /> by
        <a
          href="https://github.com/valentinHLica"
          target="_blank"
          rel="noreferrer"
        >
          Valentin Lica
        </a>
      </p>
    </footer>
  );
};

export default Footer;
