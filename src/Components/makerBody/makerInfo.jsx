import React from "react";
import styles from "../../styles/makerBody.module.css";
const MakerInfo = ({ item }) => {
  return (
    <li className={styles.list}>
      <table className={styles.table}>
        <tr className={styles.tr1}>
          <td className={styles.td1}>{item.name}</td>
          <td className={styles.td1}>{item.company}</td>
          <td className={styles.td1}>{item.color}</td>
        </tr>
        <tr className={styles.tr1}>
          <td className={styles.td2}>{item.job}</td>
          <td className={styles.td2}>{item.email}</td>
        </tr>
        <tr className={styles.tr1}>
          <td className={styles.td3}>{item.description}</td>
        </tr>
        <tr className={styles.tr1}>
          <td className={`${styles.td4} ${styles.check}`}>
            {item.name ? item.name : "No File"}
          </td>
          <td className={`${styles.td4} ${styles.delete}`}>delete</td>
        </tr>
      </table>
    </li>
  );
};

export default MakerInfo;
