import { ErrorMessage, Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";

import styles from "./authForm.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuhtForm = ({ signUp = "true" }) => {
  const { handleSignUp, handleSignOut, handleLogin } = useAuth();
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e, setFieldValue) => {
    setFieldValue(e.target.name, e.target.value);
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });

    // console.log(val, "values");
  };

  // useEffect(() => {
  //   auth.currentUser && navigate("/login");
  // }, [auth.currentUser]);

  return (
    <div className={styles.authfrmSec_main}>
      {/* <div className={styles.authfrmSec_child}> */}
      <div className={styles.authfrmSec_text}>
        <div className={styles.authfrmSec_text_head}>
          {!signUp ? "Log in to Exclusive" : "Create an account"}
        </div>
        <div className={styles.authfrmSec_text_para}>
          Enter your details below
        </div>
      </div>
      <Formik
        initialValues={val}
        validate={(values) => {
          const err = {};
          if (!values.name) {
            err.name = "Required";
          }
          if (!values.email) {
            err.email = "Required";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            err.email = "Invalid email address";
          }
          if (!values.password) {
            err.password = "Required";
          } else if (values.password.length < 6) {
            err.password = "Password should be at least 6 digits";
          }

          return err;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("form submitted");
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
            className={styles.authfrmSec_form}
          >
            {!signUp ? (
              ""
            ) : (
              <>
                <div className={styles.authfrmSec_form_inputs}>
                  <Field
                    type="text"
                    onChange={(e) => handleChange(e, setFieldValue)}
                    // value={values.name}
                    name="name"
                    placeholder="Name"
                    className={styles.authfrmSec_form_field}
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className={styles.authfrmSec_error}
                  />
                </div>
              </>
            )}
            <div className={styles.authfrmSec_form_inputs}>
              <Field
                type="email"
                onChange={(e) => handleChange(e, setFieldValue)}
                name="email"
                placeholder="Email or Phone Number"
                className={styles.authfrmSec_form_field}
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className={styles.authfrmSec_error}
              />
            </div>
            <div className={styles.authfrmSec_form_inputs}>
              <Field
                type="password"
                onChange={(e) => handleChange(e, setFieldValue)}
                name="password"
                placeholder="Password"
                className={styles.authfrmSec_form_field}
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className={styles.authfrmSec_error}
              />
            </div>
            {!signUp ? (
              <div className={styles.authfrmSec_form_loginButton}>
                <Button
                  text={"Log In"}
                  onClick={() => {
                    handleLogin({
                      displayName: val.name,
                      email: val.email,
                      password: val.password,
                    });
                  }}
                />
                <div className={styles.authfrmSec_form_forgot}>
                  Forgot Password ?
                </div>
              </div>
            ) : (
              <div className={styles.authfrmSec_form_button}>
                <Button
                  text={"Create Account"}
                  maxWidth="100%"
                  type="submit"
                  onClick={() => {
                    handleSignUp({
                      displayName: val.name,
                      email: val.email,
                      password: val.password,
                    });
                  }}
                />
                <button>
                  {" "}
                  <FcGoogle style={{ width: "24px", height: "24px" }} />
                  Sign up with Google
                </button>
                <p>
                  Already have account?{" "}
                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log in
                  </span>
                </p>
              </div>
            )}
          </Form>
        )}
      </Formik>
      {/* </div> */}
    </div>
  );
};

export default AuhtForm;
