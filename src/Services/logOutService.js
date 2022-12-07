export const logOutService = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };