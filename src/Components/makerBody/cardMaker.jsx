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
        {information.map((item) => (
          <MakerInfo
            item={item}
            information={information}
            key={item.id}
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
