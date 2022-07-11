import "./App.css";
import LoginBody from "./Components/login/loginBody";
import styles from "./styles/login.module.css";
import MakerBody from "./Components/makerBody/makerBody";
import { Routes, Route } from "react-router-dom";
function App({ authService, FileInput, cardRepository }) {
  return (
    <div className={styles.mainBody}>
      <Routes>
        <Route path="/" element={<LoginBody authService={authService} />} />
        <Route
          path="/home"
          element={
            <MakerBody
              authService={authService}
              FileInput={FileInput}
              cardRepository={cardRepository}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
