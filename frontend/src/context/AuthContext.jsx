import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import API from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const savedUser =
        localStorage.getItem("user");

      if (savedUser) {
        try {
          setUser(
            JSON.parse(savedUser)
          );
        } catch (error) {
          localStorage.removeItem(
            "user"
          );
        }

        setLoading(false);
        return;
      }

      const token =
        localStorage.getItem("token");

      if (token) {
        try {
          const res =
            await API.get("/auth/me");

          setUser(res.data.user);
          localStorage.setItem(
            "user",
            JSON.stringify(
              res.data.user
            )
          );
        } catch (error) {
          localStorage.removeItem(
            "token"
          );
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const login = (
    userData,
    token
  ) => {
    if (token) {
      localStorage.setItem(
        "token",
        token
      );
    }

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);

export default AuthContext;
