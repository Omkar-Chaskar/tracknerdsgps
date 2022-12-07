import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInService, logOutService} from "../Services"
import toast from "react-hot-toast";

const AuthContext = createContext();
const localToken = JSON.parse(localStorage.getItem("auth_token"));

const inititalAuthStateValue = {
  loginStatus: localToken ? true : false,
  authToken: localToken,
  password: "",
  email: ""
};

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(inititalAuthStateValue);

  const logInHandler = async (logInData) => {
    if (logInData.email === "" && logInData.password === "") {
      toast("fill the fields");
    } else {
      const { data, status } = await logInService(logInData);
      if (status === 200) {
        localStorage.setItem("auth_token", JSON.stringify(data.token));
        setUser({
          loginStatus: true,
          authToken: data.token,
          email: data.user.email,
          password: data.user.password
        });
        toast("LogIn Successfully");
        navigateTo("/");
      } else {
        toast("LogIn Fail");
      }
    }
  };

  const logOutHandler = () => {
    logOutService();
    setUser({ loginStatus: false });
    toast("Logged out successfully");
    navigateTo("/");
  };

  return (
    <AuthContext.Provider
      value={{ logInHandler, logOutHandler, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };