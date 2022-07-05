import "./App.css";
import LoginBody from "./Components/login/loginBody";
import styles from "./styles/login.module.css";
import MakerBody from "./Components/makerBody/makerBody";
import { Routes, Route, Link } from "react-router-dom";
function App({ authService }) {
  return (
    <div className={styles.mainBody}>
      <nav>
        <Link to="/">login</Link>
        <Link to="/home">home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoginBody authService={authService} />} />
        <Route path="/home" element={<MakerBody authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
