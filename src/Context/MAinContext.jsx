import React, { createContext, useState } from "react";

export let CountContext = createContext();

export default function MainContext({ children }) {
  const [count, setCount] = useState(0); // Example state

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
