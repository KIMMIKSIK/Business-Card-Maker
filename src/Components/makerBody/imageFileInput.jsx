import React, { useRef } from "react";
import styles from "../../styles/makerBody.module.css";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = (e) => {
    imageUploader
      .upload(e.target.files[0]) //
      .then((res) => {
        console.log(res.url, " ", res.original_filename);
        onFileChange({
          name: res.original_filename,
          url: res.url,
        });
        inputRef.current.value = "";
      });
  };
  return (
    <div className={styles.fileContainer}>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        name="file"
        className={styles.fileUploaderInput}
        onChange={onChange}
      />
      <button
        className={styles.fileButton}
        onClick={onButtonClick}
        style={name ? {} : { background: "lightgrey" }}
      >
        {name || "No File"}
      </button>
    </div>
  );
};

export default ImageFileInput;
