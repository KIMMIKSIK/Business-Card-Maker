import React from "react";
import styles from "../../styles/login.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ login, authService }) => {
  const navigate = useNavigate();
  const logout = () => {
    authService
      .logout() //
      .then(() => {
        console.log("logout success");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <header>
      <div className={styles.loginHeader}>
        <img
          className={styles.loginImage}
          src={logo}
          alt="사진"
          height="33px"
        />
        <section>Business Card Maker</section>
        {login && (
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
