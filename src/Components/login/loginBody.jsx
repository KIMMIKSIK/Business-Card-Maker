import React from "react";
import styles from "../../styles/login.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
const LoginBody = ({ authService }) => {
  const onLogin = (e) => {
    authService
      .login(e.currentTarget.textContent) //
      .then(console.log);
  };
  return (
    <main className={styles.loginBody}>
      <Header />
      <section className={styles.loginContent}>
        <div className={styles.loginLogo}>Login</div>
        <button className={styles.loginButton} onClick={onLogin}>
          Google
        </button>
        <button className={styles.loginButton} onClick={onLogin}>
          Github
        </button>
      </section>
      <Footer />
    </main>
  );
};

export default LoginBody;
