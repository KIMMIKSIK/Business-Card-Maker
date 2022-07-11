import React, { useRef, useState } from "react";
import styles from "../../styles/makerBody.module.css";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = (e) => {
    setLoading(true);
    imageUploader
      .upload(e.target.files[0]) //
      .then((res) => {
        setLoading(false);
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
      {!loading && (
        <button
          className={styles.fileButton}
          onClick={onButtonClick}
          style={name ? {} : { background: "lightgrey" }}
        >
          {name || "No File"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
