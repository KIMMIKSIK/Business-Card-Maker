import React from "react";
import styles from "../../styles/login.module.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className={styles.loginHeader}>
      <img className={styles.loginImage} src={logo} alt="사진" height="33px" />
      <section>Business Card Maker</section>
    </header>
  );
};

export default Header;
