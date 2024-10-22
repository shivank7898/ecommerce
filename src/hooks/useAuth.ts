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
import { setUser, UserState } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

interface HandleParams{
  displayName: string
  email: string 
  password: string
}

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting persistence: ", error.message);
  });

  const handleSignUp = async ({ displayName, email, password }: HandleParams) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential?.user;

      //updating the displayName for
      await updateProfile(user, { displayName: displayName });

      const userData: UserState["user"]= {
        id: user.uid,
        email: user?.email,
        displayName,
      };

      console.log(userData, "user");

      dispatch(setUser(userData));
      navigate("/");
    } catch (error) {
        if (error instanceof Error) {
          console.error("Error signing up: ", error.message);
        } else {
          console.error("Unexpected error signing up: ", error);
        }
    }
  };

  const handleLogin = async ({ displayName, email, password }:HandleParams) => {
    console.log(displayName);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Wait for the profile to be updated
       
      const userData: UserState["user"] = {
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      dispatch(setUser(userData));
      navigate("/");
    } catch (error) {
        if (error instanceof Error) {
          console.error("Error signing up: ", error.message);
        } else {
          console.error("Unexpected error signing up: ", error);
        }
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
    // console.log("signned out");
  };

  return { handleSignUp, handleLogin, handleSignOut };
};

export default useAuth;
