// context/AvatarAnimationContext.js
import React, { createContext, useState } from "react";

export const AvatarAnimationContext = createContext();

const AvatarAnimationProvider = ({ children }) => {
  const [avaterInView, setAvaterInView] = useState(true);

  return (
    <AvatarAnimationContext.Provider value={{ avaterInView, setAvaterInView }}>
      {children}
    </AvatarAnimationContext.Provider>
  );
};

export default AvatarAnimationProvider;
