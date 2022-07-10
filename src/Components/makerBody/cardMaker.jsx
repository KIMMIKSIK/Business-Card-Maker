import styles from "../../styles/makerBody.module.css";
import AddCardForm from "../card-add-form/addCardForm";
import MakerInfo from "./makerInfo";

const CardMaker = ({ information, setInformation, myImage, FileInput }) => {
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
            FileInput={FileInput}
          />
        ))}
        <AddCardForm
          myImage={myImage}
          information={information}
          setItem={setInformation}
          FileInput={FileInput}
        />
      </ul>
    </section>
  );
};

export default CardMaker;
