import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const savedUser = localStorage.getItem("event_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem("event_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("event_user");
    }
  }, [user]);

  const handleLogout = () => {
    setLoading(false);
    setUser(null);
    localStorage.removeItem("event_user");
  };
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleLogout,
    isAuthenticated: !!user,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export { AuthProvider, AuthContext };
