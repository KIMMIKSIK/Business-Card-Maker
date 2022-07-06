import React from "react";
import styles from "../../styles/makerBody.module.css";
import picture from "../../assets/react.png";
const MakerPre = ({ item }) => {
  return (
    <li className={styles.list}>
      <section className={styles.previewBox}>
        <article className={styles.prePictureBox}>
          <img src={picture} className={styles.prePicture} />
        </article>
        <div className={styles.preTextBox}>
          <section className={styles.preTitle}>{item.name}</section>
          <section>{item.company}</section>
          <hr className={styles.hr} />
          <section>{item.job}</section>
          <section>{item.email}</section>
          <section>{item.description}</section>
        </div>
      </section>
    </li>
  );
};

export default MakerPre;
