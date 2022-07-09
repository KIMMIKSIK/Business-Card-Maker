import React from "react";
import styles from "../../styles/makerBody.module.css";
const ImageFileInput = ({ newCard, onPost }) => {
  const postImage = (e) => {
    onPost(e);
  };

  return (
    <button
      className={styles.fileInput}
      style={newCard ? { background: "lightgrey" } : {}}
      onClick={postImage}
    >
      {newCard || "Image"}
    </button>
  );
};

export default ImageFileInput;
