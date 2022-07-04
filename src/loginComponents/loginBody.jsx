import React from "react";
import logo from "../assets/logo.png";
import styles from "../styles/loginBody.module.css";
const LoginBody = () => {
  return (
    <div className={styles.mainBody}>
      <main className={styles.loginBody}>
        <header className={styles.loginHeader}>
          <img
            className={styles.loginImage}
            src={logo}
            alt="사진"
            height="33px"
          />
          <section>Business Card Maker</section>
        </header>
        <section className={styles.loginContent}>
          <div className={styles.loginLogo}>Login</div>
          <button className={styles.loginButton}>Google</button>
          <button className={styles.loginButton}>Github</button>
        </section>
        <footer className={styles.loginFooter}>Make your dream</footer>
      </main>
    </div>
  );
};

export default LoginBody;
