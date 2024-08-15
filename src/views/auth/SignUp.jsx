import styles from "./signUp.module.css";

import AuhtForm from "../../components/authForm/AuthForm";
import img from "../../assets/auth.png";

const SignUp = () => {
  return (
    <div className={styles.SignUpSec_main}>
      <div className={styles.SignUpSec_child} style={{ display: "flex" }}>
        <div className={styles.SignUpSec_img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.SignUpSec_form}>
          <AuhtForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
