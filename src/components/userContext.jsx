import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Alice");

  const updateNameGlobally = (value) => {
    setName(value);
  };

  return (
    <UserContext.Provider value={{ name, updateNameGlobally }}>
      {children}
    </UserContext.Provider>
  );
};
