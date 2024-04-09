import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthOfContext = createContext(null);
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInformation = {
    user,
    createUser,
  };
  return (
    <AuthOfContext.Provider value={authInformation}>
      {children}
    </AuthOfContext.Provider>
  );
};

export default AuthContext;
