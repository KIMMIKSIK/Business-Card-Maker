import React from "react";
import styles from "../../styles/makerBody.module.css";
import Button from "./button";
import ImageFileInput from "./imageFileInput";
const MakerInfo = ({ item }) => {
  const { name, company, job, email, description, color, fileName, fileURL } =
    item;
  const onSubmit = () => {};
  return (
    <li className={styles.list}>
      <form className={styles.form}>
        <input className={styles.input} type="text" name="name" value={name} />
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
        />
        <select className={styles.select} name="color" value={color}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input className={styles.input} type="text" name="job" value={job} />
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
        />
        <textarea
          className={styles.textarea}
          name="description"
          value={description}
        ></textarea>
        <ImageFileInput />
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </li>
  );
};

export default MakerInfo;
