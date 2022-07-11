import React, { useEffect } from "react";
import styles from "../../styles/login.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
const LoginBody = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/home", {
      state: { id: userId },
    });
  };
  const onLogin = (e) => {
    authService
      .login(e.currentTarget.textContent) //
      .then((data) => {
        return goToMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <main className={styles.loginBody}>
      <Header authService={authService} />
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
