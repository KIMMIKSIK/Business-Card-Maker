import React, { useState } from "react";
import styles from "../../styles/makerBody.module.css";
import AddCardForm from "../card-add-form/addCardForm";
import MakerInfo from "./makerInfo";

const CardMaker = ({ information, setInformation }) => {
  const [newCard, setNewCard] = useState("no File");
  return (
    <section className={styles.itemBox}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.ulList}>
        {Object.keys(information).map((key) => (
          <MakerInfo
            item={information[key]}
            information={information}
            key={key}
            setItem={setInformation}
          />
        ))}
        <AddCardForm
          newCard={newCard}
          information={information}
          setItem={setInformation}
        />
      </ul>
    </section>
  );
};

export default CardMaker;
