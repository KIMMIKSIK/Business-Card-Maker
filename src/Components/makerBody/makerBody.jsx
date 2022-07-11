import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "../../styles/makerBody.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CardMaker from "./cardMaker";
import CardPreview from "./cardPreview";

const MakerBody = ({ authService, FileInput, cardRepository }) => {
  const [information, setInformation] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location?.state;
  // 옵셔널 체이닝 연산자
  const [userId, setUserId] = useState(locationState && locationState.id);
  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setInformation(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) setUserId(user.uid);
      else navigate("/");
    });
  }, [authService, navigate]);
  // useState는 얕은 비교를 수행!
  return (
    <>
      {location.state ? (
        <div className={styles.body}>
          <Header state={location.state} authService={authService} />
          <section className={styles.content}>
            <CardMaker
              information={information}
              setInformation={setInformation}
              FileInput={FileInput}
              cardRepository={cardRepository}
              userId={userId}
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
