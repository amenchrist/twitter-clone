import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  //Set app default values
  const server = 'https://localhost:8080';
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);
  

  //Set user defaults
  const [currentMember, setCurrentMember] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isRegistered, setIsRegistered] = useState(true);


  const blankUser = {
    email: '',
    isSignedIn: false,
    isRegistered: false,
    phoneExists: false,
    avatar: '/static/images/avatars/avatar_6.png',
  }

  const [user, setUser] = useState(blankUser)
 
  
  const contextStateVars = {
    isSignedIn, setIsSignedIn, isRegistered, setIsRegistered, currentMember, setCurrentMember,
    isMobileNavOpen, setMobileNavOpen, toggleMenuIcon, setToggleMenuIcon,
    user, setUser,  blankUser,server
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);