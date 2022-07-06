import React from "react";
import styles from "../../styles/login.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ state, authService }) => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    authService
      .logout() //
      .then(() => {
        console.log("logout success");
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
        {state && (
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
