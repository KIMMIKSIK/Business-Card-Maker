import "./App.css";
import LoginBody from "./Components/login/loginBody";
import styles from "./styles/login.module.css";
function App({ authService }) {
  return (
    <div className={styles.mainBody}>
      <LoginBody authService={authService} />
    </div>
  );
}

export default App;
