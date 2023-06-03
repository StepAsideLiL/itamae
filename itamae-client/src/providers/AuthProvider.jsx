import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../utils/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (auth, email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (auth, email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = (auth, provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loginWithGithub = (auth, provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = (auth) => {
    setIsLoading(true);
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    googleProvider,
    githubProvider,
    auth,
    createUser,
    login,
    loginWithGoogle,
    loginWithGithub,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
