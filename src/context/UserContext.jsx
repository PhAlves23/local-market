import React, { useState, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    isLogged: true,
    message: "Olá",
  });
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
}
