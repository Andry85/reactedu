import React, { createContext } from 'react';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "red",
      background: "#222222"
    }
  };
  
  export const ThemeContext = React.createContext(null);

  export const ThemeContextProviderComponent = ({children}) => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            {children}
        </ThemeContext.Provider>
      );
  }