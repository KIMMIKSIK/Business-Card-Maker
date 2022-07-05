import React from "react";
import { useState } from "react";
import styles from "../../styles/login.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
const LoginBody = ({ authService }) => {
  const navigate = useNavigate();
  const onLogin = (e) => {
    authService
      .login(e.currentTarget.textContent) //
      .then((res) => {
        if (res.operationType === "signIn") {
          console.log(res.user.displayName);
          navigate("/home");
        }
      });
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
