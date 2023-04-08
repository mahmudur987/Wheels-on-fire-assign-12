import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect } from "react";
import app from "../Firebase/Firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, SetUser] = useState({});
  const [loading, Setloading] = useState(false);
  const [cart, SetCart] = useState({});
  const [theme, SetTheme] = useState(false);
  const [selectedDate, SetSelectedDate] = useState(new Date());
  const [dashboard, Setdashboard] = useState(true);
  const signUp = (email, password) => {
    Setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    Setloading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = (provider) => {
    Setloading(true);

    return signInWithPopup(auth, provider);
  };
  const githubLogIn = (provider) => {
    Setloading(true);

    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (profile) => {
    Setloading(true);

    return updateProfile(auth.currentUser, profile);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      Setloading(false);
      // console.log("currentuser", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    SetUser,
    signUp,
    login,
    updateUserProfile,
    logout,
    googleLogIn,
    githubLogIn,
    loading,
    passwordReset,
    SetCart,
    cart,
    theme,
    SetTheme,
    Setloading,
    selectedDate,
    SetSelectedDate,
    dashboard,
    Setdashboard,
  };
  return (
    <authContext.Provider value={authinfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
