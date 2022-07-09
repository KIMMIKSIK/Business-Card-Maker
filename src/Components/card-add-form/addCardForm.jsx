import React, { useState, useRef } from "react";
import styles from "../../styles/makerBody.module.css";
import Button from "..//makerBody/button";
import ImageFileInput from "../makerBody/imageFileInput";
const AddCardForm = ({ information, newCard, setItem }) => {
  const idRef = useRef(1);
  const [addInfo, setAddInfo] = useState({
    id: idRef.current,
    name: "",
    company: "",
    color: "dark",
    job: "",
    email: "",
    description: "",
    fileName: "",
    fileURL: null,
  });
  const onChange = (e) => {
    setAddInfo({ ...addInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    idRef.current++;
    setItem([...information, { ...addInfo, id: idRef.current }]);
    setAddInfo({
      id: idRef.current,
      name: "",
      company: "",
      color: "dark",
      job: "",
      email: "",
      description: "",
      fileName: "",
      fileURL: null,
    });
  };

  return (
    <li className={styles.list}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="name"
          value={addInfo.name}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          placeholder="company"
          value={addInfo.company}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name="color"
          placeholder="Light"
          value={addInfo.color}
          onChange={onChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="job"
          placeholder="job"
          value={addInfo.job}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="email"
          value={addInfo.email}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          placeholder="message"
          name="description"
          value={addInfo.description}
          onChange={onChange}
        ></textarea>
        <ImageFileInput newCard={newCard} />
        <Button name="Add" onAdd={onSubmit} />
      </form>
    </li>
  );
};
export default AddCardForm;
