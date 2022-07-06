import React from "react";
import styles from "../../styles/makerBody.module.css";
import MakerInfo from "./makerInfo";

const CardMaker = ({ information }) => {
  return (
    <section className={styles.itemBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.ulList}>
        {information.map((item) => (
          <MakerInfo item={item} key={item.email} />
        ))}
      </ul>
    </section>
  );
};

export default CardMaker;
