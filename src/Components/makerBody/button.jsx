import React from "react";
import styles from "../../styles/makerBody.module.css";
const Button = React.memo(({ name, onClick, onAdd }) => {
  return (
    <button
      className={styles.button}
      onClick={name === "Add" ? onAdd : onClick}
    >
      {name}
    </button>
  );
});

export default Button;
