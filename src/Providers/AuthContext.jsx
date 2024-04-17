import {
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { GithubAuthProvider } from "firebase/auth";
import UpdateProfile from "./../pages/UpdateProfile/UpdateProfile";

export const AuthOfContext = createContext(null);
const auth = getAuth(app);
// auth prov
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const XProvider = new TwitterAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update
  const UpdateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    toast.success("This didn't work.");
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    toast.error("This didn't work.");
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const XLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, XProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInformation = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogin,
    XLogin,
    UpdateUserProfile,
  };
  return (
    <AuthOfContext.Provider value={authInformation}>
      {children}
    </AuthOfContext.Provider>
  );
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node,
};
