import React from "react";
import styles from "../../styles/makerBody.module.css";
import Button from "./button";

const MakerInfo = React.memo(
  ({ item, setItem, information, FileInput, cardRepository, userId }) => {
    const { id, name, company, job, email, description, color, fileName } =
      item;
    const onSubmit = (e) => {
      e.preventDefault();
      const deleteInfo = { ...information };
      cardRepository.removeCard(userId, deleteInfo[id]);
      delete deleteInfo[id];
      setItem(deleteInfo);
    };

    const onChange = (e) => {
      const updateInfo = {
        ...item,
        [e.currentTarget.name]: e.currentTarget.value,
      };
      cardRepository.saveCard(userId, updateInfo);
      setItem((Info) => {
        const newFullInfo = { ...information };
        newFullInfo[id] = updateInfo;
        return newFullInfo;
      });
      // preview로 보여지는 변화가 동기적이아니라 비동기적으로 날 우려가 있기에 세터함수 인자를 콜백함수로 전달하였다.
    };
    // const onChange = (e) => {
    //   const updateInfo = information.map((item) => {
    //     if (id === item.id) {
    //       return { ...item, [e.target.name]: e.target.value };
    //     }
    //     return item;
    //   });
    //   setItem(updateInfo);
    // };
    // 아래방법은 .map을 사용하게 되는데 내용이 많아지면 성능이 안좋은 알고리즘이 되기 때문에 state를 배열이 아닌 객체형태로 바꾼뒤 키값을 1,2,3등으로 주면서 map으로 돌리지 않아도 되도록 만들었다.

    const onFileChange = (i) => {
      if (i.name.length > 4) {
        i.name = i.name.substr(0, 4);
      }
      const { name, url } = i;

      const updateFileImage = {
        ...item,
        fileName: name,
        fileURL: url,
      };
      setItem((info) => {
        const newFullInfo = { ...information };
        newFullInfo[id] = updateFileImage;
        return newFullInfo;
      });
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
          <FileInput name={fileName} onFileChange={onFileChange} />
          <Button name="Delete" onClick={onSubmit} />
        </form>
      </li>
    );
  }
);

export default MakerInfo;
