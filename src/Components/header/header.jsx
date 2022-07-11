import React from "react";
import styles from "../../styles/login.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header = React.memo(({ state, authService }) => {
  const navigate = useNavigate();
  const logout = () => {
    authService
      .logout() //
      .then(() => {
        navigate("/");
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
});

export default Header;
