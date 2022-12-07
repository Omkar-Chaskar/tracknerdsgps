import axios from "axios";
import toast from "react-hot-toast";

const logInService = async (logInData) => {
  try {
    const { data, status } = await axios.post("https://staging-api.tracknerd.io/v1/auth/login", logInData);
    return { data, status };
  } catch {
    toast("Login Fail");
    console.error("LogIn failed");
  }
};
export { logInService };