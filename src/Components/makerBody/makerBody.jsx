import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "../../styles/makerBody.module.css";
import { useState } from "react";
import { useEffect } from "react";
const MakerBody = ({ authService }) => {
  const [login, setLogin] = useState("");
  console.log(authService.firebaseAuth.currentUser);
  useEffect(() => {
    if (authService.firebaseAuth.currentUser) {
      setLogin(authService.firebaseAuth.currentUser.accessToken);
    }
  }, [authService]);

  return (
    <>
      {login ? (
        <div className={styles.body}>
          <Header login={login} authService={authService} />
          <section className={styles.content}>hi</section>
          <Footer />
        </div>
      ) : (
        <p>로그인 후 이용해 주세요!</p>
      )}
    </>
  );
};

export default MakerBody;
