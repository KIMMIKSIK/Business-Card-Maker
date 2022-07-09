import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "../../styles/makerBody.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CardMaker from "./cardMaker";
import CardPreview from "./cardPreview";

const MakerBody = ({ authService }) => {
  const [information, setInformation] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(authService.firebaseAuth.currentUser);
  console.log(location.state);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate("/");
    });
  }, [authService]);
  return (
    <>
      {location.state ? (
        <div className={styles.body}>
          <Header state={location.state} authService={authService} />
          <section className={styles.content}>
            <CardMaker
              information={information}
              setInformation={setInformation}
            />
            <CardPreview information={information} />
          </section>
          <Footer />
        </div>
      ) : (
        <p>로그인 후 이용해 주세요!</p>
      )}
    </>
  );
};

export default MakerBody;
