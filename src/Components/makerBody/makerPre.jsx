import React from "react";
import styles from "../../styles/makerBody.module.css";
import picture from "../../assets/react.png";

const MakerPre = React.memo(({ item }) => {
  const { name, company, job, email, description, color, fileURL } = item;
  const DEFAULT_IMAGE = picture;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={styles.list}>
      <section className={`${styles.previewBox} ${getStyles(color)}`}>
        <article className={styles.prePictureBox}>
          <img src={url} className={styles.prePicture} alt={"profile"} />
        </article>
        <div className={styles.preTextBox}>
          <section className={styles.preTitle}>{name}</section>
          <section className={styles.company}>{company}</section>

          <section>{job}</section>
          <section>{email}</section>
          <section>{description}</section>
        </div>
      </section>
    </li>
  );
});
function getStyles(color) {
  switch (color) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${color}`);
  }
}

export default MakerPre;
