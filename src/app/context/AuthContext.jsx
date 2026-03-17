"use client"

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }){
  const [userSignedIn, setUserSignedIn] = useState(false);
  // const [cartCounter, setCartCounter] = useState(0);

  return (
    <AuthContext.Provider value={{ userSignedIn, setUserSignedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  if (!context){
    throw new Error("useAuth must be used under Auth Provider")
  }
  return context
}