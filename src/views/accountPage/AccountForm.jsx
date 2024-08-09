import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../../components/button/Button"

import styles from "./accountPage.module.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const handleSubmit = (values, { setSubmitting }) => {
  // Handle form submission logic here
  console.log(values);
  setSubmitting(false);
};

const AccountForm = () => {
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.account_form_container}>
            <div className={styles.form_head}>Edit Your Profile</div>
            <div className={styles.generalInfo}>
              <div className={styles.generalInfo_child}>
                <div className={styles.formField}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name
                  </label>
                  <Field
                    placeholder="firstName"
                    type="text"
                    name="firstName"
                    id="firstName"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <Field
                    placeholder="lastName"
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
              <div className={styles.generalInfo_child}>
                <div className={styles.formField}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <Field
                    placeholder="email"
                    type="email"
                    name="email"
                    id="email"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="address" className={styles.label}>
                    Address
                  </label>
                  <Field
                    placeholder="address"
                    type="text"
                    name="address"
                    id="address"
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className={styles.error}
                  />
                </div>
              </div>
            </div>
            <div className={styles.passwordInfo}>
              <div className={styles.formField}>
                <label htmlFor="currentPassword" className={styles.label}>
                  Password
                </label>
                <Field
                  placeholder="Current Password"
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  className={styles.input}
                />
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formField}>
                <Field
                  placeholder="New Password"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  className={styles.input}
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formField}>
                <Field
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={styles.input}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>
            <div className={styles.form_button}>
                <div className={styles.form_button_text}>Cancel</div>
              <Button  type={"submit"} text={"Save Changes"} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountForm;
