import Link from "next/link";
import React from "react";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Good Network</h1>
      <div className={styles.navContainer}>
        <button className={styles.navButton}>Create Organization</button>
        <Link href="/login" className={styles.buttonLink}>
          <button className={styles.loginButton}>Login</button>
        </Link>

        <Link href="/register" className={styles.buttonLink}>
          <button className={styles.signUpButton}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
