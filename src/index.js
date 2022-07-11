import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./Components/makerBody/imageFileInput";
import CardRepository from "./service/card_repository";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);
const FileInput = React.memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </BrowserRouter>
);
// component를 prop으로 전달하는 경우 보통 대문자로 표시한다.
