import { useContext } from "react";
import { AuthOfContext } from "../Providers/AuthContext";

const useAuth = () => {
  const all = useContext(AuthOfContext);
  return all;
};

export default useAuth;
