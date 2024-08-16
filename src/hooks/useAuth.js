import React from "react";
import { auth } from "../firebase";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting persistence: ", error.message);
  });

  const handleSignUp = async ({ displayName, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      //updating the displayName for
      await updateProfile(user, { displayName: displayName });

      const userData = {
        id: user.uid,
        email: user.email,
        displayName,
      };

      console.log(userData, "user");

      dispatch(setUser(userData));
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleLogin = async ({ displayName, email, password }) => {
    console.log(displayName);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Wait for the profile to be updated
      console.log(user.displayName);
      const userData = {
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      dispatch(setUser(userData));
      navigate("/");
    } catch (err) {}
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
    // console.log("signned out");
  };

  return { handleSignUp, handleLogin, handleSignOut };
};

export default useAuth;
