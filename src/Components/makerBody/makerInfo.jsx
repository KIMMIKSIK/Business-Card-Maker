import React from "react";
import styles from "../../styles/makerBody.module.css";
import Button from "./button";
import ImageFileInput from "./imageFileInput";
const MakerInfo = ({ item, setItem, information }) => {
  const {
    id,
    name,
    company,
    job,
    email,
    description,
    color,
    fileName,
    fileURL,
  } = item;
  const onSubmit = (e) => {
    e.preventDefault();
    const deleteInfo = [...information];
    deleteInfo.map((item) => {
      if (item.id === id) {
        const index = deleteInfo.indexOf(item);
        deleteInfo.splice(index, 1);
      }
    });

    setItem(deleteInfo);
  };

  const onChange = (e) => {
    const updateInfo = information.map((item) => {
      if (id === item.id) {
        return { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });
    setItem(updateInfo);
  };
  return (
    <li className={styles.list}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={onChange}
          value={name}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          onChange={onChange}
          value={company}
        />
        <select
          className={styles.select}
          name="color"
          onChange={onChange}
          value={color}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="job"
          onChange={onChange}
          value={job}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          onChange={onChange}
          value={email}
        />
        <textarea
          className={styles.textarea}
          onChange={onChange}
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
