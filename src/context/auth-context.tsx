import React, { useState } from "react";

interface ContextType {
  token: string;
  isLoggedIn: boolean;
  userId: number | undefined;
  login: (token: string, userId: number) => void;
  logout: () => void;
}

const AuthContext = React.createContext<ContextType>({
  token: "",
  isLoggedIn: false,
  userId: undefined,
  login: (token: string, userId: number) => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<Props> = (props: Props) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState<number>();
  const isLoggedIn = token ? true : false;

  const loginHandler = (token: string, userId: number) => {
    setToken(token);
    setUserId(userId);
  };

  const logoutHandler = () => {
    setToken("");
  };

  const contextValue: ContextType = {
    token: token,
    isLoggedIn: isLoggedIn,
    userId: userId,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
