import React from "react";
import styles from "../../styles/makerBody.module.css";
import MakerPre from "./makerPre";
const CardPreview = ({ information }) => {
  return (
    <section className={styles.itemBox}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.ulList}>
        {information.map((item) => (
          <MakerPre item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};
export default CardPreview;
