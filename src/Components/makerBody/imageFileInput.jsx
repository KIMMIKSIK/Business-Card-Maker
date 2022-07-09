import React from "react";
import styles from "../../styles/makerBody.module.css";
const ImageFileInput = ({ newCard }) => {
  console.log(newCard, "newCard");
  return (
    <button
      className={styles.fileInput}
      style={newCard ? { background: "lightgrey" } : {}}
    >
      {newCard || "Image"}
    </button>
  );
};

export default ImageFileInput;
