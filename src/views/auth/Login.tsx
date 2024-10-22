import AuhtForm from "../../components/authForm/AuthForm";
import styles from "./signUp.module.css";
import img from "../../assets/auth.png";
const Login = () => {
  return (
    <div className={styles.SignUpSec_main}>
      <div className={styles.SignUpSec_child} style={{ display: "flex" }}>
        <div className={styles.SignUpSec_img}>
          <img src={img} alt="loginImg" />
        </div>
        <div className={styles.SignUpSec_form}>
          <AuhtForm signUp={false}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
