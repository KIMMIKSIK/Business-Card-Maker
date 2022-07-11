import React, { useEffect, useState } from "react";
import styles from "../../styles/makerBody.module.css";
import Button from "../makerBody/button";
const AddCardForm = ({
  information,
  setItem,
  FileInput,
  cardRepository,
  userId,
}) => {
  const setInfo = {
    name: "",
    company: "",
    color: "dark",
    job: "",
    email: "",
    description: "",
    fileName: "",
    fileURL: null,
  };
  const [addInfo, setAddInfo] = useState(setInfo);
  const onChange = (e) => {
    setAddInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const card = { ...addInfo, id: Date.now() };
    setItem({
      ...information,
      [card.id]: card,
    });
    cardRepository.saveCard(userId, card);
    setAddInfo(setInfo);
  };

  const onFileChange = (item) => {
    if (item.name.length > 4) {
      item.name = item.name.substr(0, 4);
    }
    const { name, url } = item;
    setAddInfo((info) => ({ ...info, fileName: name, fileURL: url }));
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
        <FileInput name={addInfo.fileName} onFileChange={onFileChange} />
        <Button name="Add" onAdd={onSubmit} />
      </form>
    </li>
  );
};
export default AddCardForm;
